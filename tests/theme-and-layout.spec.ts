import { test, expect } from '@playwright/test';

test.describe('Theme Toggle and Layout Validation', () => {
  test('should toggle theme colors visually', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Wait for theme system to initialize
    await page.waitForTimeout(2000);
    
    // Wait for theme toggle to be ready (not disabled)
    await page.waitForSelector('button[aria-label*="Switch to"]', { timeout: 10000 });
    
    // Get initial background color
    const initialBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    const initialMainBg = await page.evaluate(() => {
      const main = document.querySelector('main');
      return main ? window.getComputedStyle(main).backgroundColor : null;
    });
    
    // Click theme toggle
    await page.click('button[aria-label*="Switch to"]');
    await page.waitForTimeout(1000); // Wait for transition
    
    // Get new background colors
    const newBodyBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    
    const newMainBg = await page.evaluate(() => {
      const main = document.querySelector('main');
      return main ? window.getComputedStyle(main).backgroundColor : null;
    });
    
    // Verify colors actually changed
    expect(initialBodyBg).not.toBe(newBodyBg);
    expect(initialMainBg).not.toBe(newMainBg);
    
    // Verify dark mode colors (should be black/near black)
    const isDarkBackground = await page.evaluate(() => {
      const body = window.getComputedStyle(document.body);
      const main = document.querySelector('main');
      const mainStyle = main ? window.getComputedStyle(main) : null;
      
      // Check if background colors are dark (rgb values close to 0)
      const bodyRgb = body.backgroundColor.match(/rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)/);
      const mainRgb = mainStyle?.backgroundColor.match(/rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)/);
      
      if (bodyRgb) {
        const [, r, g, b] = bodyRgb.map(Number);
        return r < 50 && g < 50 && b < 50; // Dark background check
      }
      return false;
    });
    
    // Since we expect dark mode after toggle
    expect(isDarkBackground).toBe(true);
  });
  
  test('should have proper content positioning with 64px margins', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check main content container has proper margins
    const containerStyles = await page.evaluate(() => {
      const container = document.querySelector('.max-w-7xl.mx-auto.px-6.sm\\:px-8');
      if (!container) return null;
      
      const styles = window.getComputedStyle(container);
      const rect = container.getBoundingClientRect();
      const parentRect = container.parentElement?.getBoundingClientRect();
      
      return {
        paddingLeft: styles.paddingLeft,
        paddingRight: styles.paddingRight,
        marginLeft: styles.marginLeft,
        marginRight: styles.marginRight,
        leftMargin: parentRect ? rect.left - parentRect.left : 0,
        rightMargin: parentRect ? parentRect.right - rect.right : 0,
        width: rect.width,
        parentWidth: parentRect?.width || 0
      };
    });
    
    expect(containerStyles).not.toBeNull();
    
    // Verify content is centered
    expect(containerStyles!.marginLeft).toBe('auto');
    expect(containerStyles!.marginRight).toBe('auto');
    
    // Check that content has appropriate padding on larger screens
    const viewportWidth = await page.viewportSize();
    if (viewportWidth && viewportWidth.width >= 640) {
      // On sm and larger screens, should have proper padding
      const paddingPx = parseInt(containerStyles!.paddingLeft);
      expect(paddingPx).toBeGreaterThanOrEqual(32); // At least 32px (equivalent to Tailwind px-8)
    }
  });
  
  test('should use monospace font in appropriate content blocks', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check for code or technical content that should be monospace
    // First, let's check if there are any elements that should be monospace
    const monospaceFonts = await page.evaluate(() => {
      const elements = document.querySelectorAll('code, pre, .font-mono, [class*=\"mono\"]');
      return Array.from(elements).map(el => {
        const styles = window.getComputedStyle(el);
        return {
          tagName: el.tagName,
          className: el.className,
          fontFamily: styles.fontFamily
        };
      });
    });
    
    // Verify monospace fonts where expected
    monospaceFonts.forEach(element => {
      expect(element.fontFamily).toMatch(/mono|courier|consolas|menlo|monaco/i);
    });
  });
  
  test('should have proper navigation rounded borders and spacing', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check navigation group styling
    const navGroupStyles = await page.evaluate(() => {
      const navGroup = document.querySelector('.bg-gray-50.dark\\:bg-gray-900\\/50.rounded-full');
      if (!navGroup) return null;
      
      const styles = window.getComputedStyle(navGroup);
      return {
        borderRadius: styles.borderRadius,
        backgroundColor: styles.backgroundColor,
        padding: styles.padding,
        border: styles.border
      };
    });
    
    expect(navGroupStyles).not.toBeNull();
    expect(navGroupStyles!.borderRadius).toBe('9999px'); // rounded-full
    expect(navGroupStyles!.border).toMatch(/1px/); // border
    
    // Check individual nav link spacing
    const navLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('nav a[class*=\"px-4\"][class*=\"py-2\"]');
      return Array.from(links).map(link => {
        const styles = window.getComputedStyle(link);
        return {
          paddingLeft: styles.paddingLeft,
          paddingRight: styles.paddingRight,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          borderRadius: styles.borderRadius
        };
      });
    });
    
    // Verify proper padding on nav links
    navLinks.forEach(link => {
      expect(parseInt(link.paddingLeft)).toBeGreaterThanOrEqual(16); // px-4
      expect(parseInt(link.paddingTop)).toBeGreaterThanOrEqual(8); // py-2
      expect(link.borderRadius).toBe('9999px'); // rounded-full
    });
  });
  
  test('should have social links with proper spacing and hover effects', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check social links spacing
    const socialLinks = await page.evaluate(() => {
      const links = document.querySelectorAll('a[href*=\"twitter.com\"], a[href*=\"github.com\"], a[href*=\"linkedin.com\"], a[href*=\"mailto:\"], a[href*=\"x.com\"]');
      return Array.from(links).map(link => {
        const styles = window.getComputedStyle(link);
        const rect = link.getBoundingClientRect();
        return {
          marginBottom: styles.marginBottom,
          paddingTop: styles.paddingTop,
          paddingBottom: styles.paddingBottom,
          display: styles.display,
          alignItems: styles.alignItems,
          gap: styles.gap,
          height: rect.height
        };
      });
    });
    
    // Verify social links have proper spacing
    socialLinks.forEach(link => {
      expect(link.display).toMatch(/flex/);
      expect(link.alignItems).toBe('center');
    });
    
    // Test hover effects
    if (socialLinks.length > 0) {
      const firstSocialLink = page.locator('a').first();
      await firstSocialLink.hover();
      
      const hoverColor = await firstSocialLink.evaluate(el => {
        return window.getComputedStyle(el).color;
      });
      
      // Should have some color (not transparent)
      expect(hoverColor).not.toBe('rgba(0, 0, 0, 0)');
    }
  });
  
  test('should have proper text content and styling', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check main heading
    const heading = await page.textContent('h1');
    expect(heading).toContain('Marcos Nikel');
    expect(heading).toContain('São Paulo');
    
    // Check for professional content
    const content = await page.textContent('main');
    expect(content).toMatch(/Mercado Libre|software engineer|programming/i);
    
    // Verify proper typography classes
    const headingStyles = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return null;
      
      const styles = window.getComputedStyle(h1);
      return {
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
        color: styles.color
      };
    });
    
    expect(headingStyles).not.toBeNull();
    expect(parseInt(headingStyles!.fontSize)).toBeGreaterThan(30); // Large font
    expect(parseInt(headingStyles!.fontWeight)).toBeGreaterThanOrEqual(600); // Bold
  });
});