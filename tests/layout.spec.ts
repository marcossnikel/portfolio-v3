import { test, expect } from '@playwright/test';

test.describe('Responsive Layout', () => {
  test('should display layout correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    
    // Check navigation is horizontal on desktop
    const nav = page.getByRole('navigation');
    await expect(nav).toBeVisible();
    
    // Check that desktop navigation links are visible (not mobile menu)
    const desktopNav = nav.locator('.hidden.md\\:block');
    await expect(desktopNav).toBeVisible();
    
    // Check mobile menu button is hidden
    const mobileMenuButton = nav.getByRole('button').filter({ has: page.locator('svg path[d*="M4 6h16M4 12h16M4 18h16"]') });
    await expect(mobileMenuButton).not.toBeVisible();
  });

  test('should display mobile layout correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone size
    await page.goto('/');
    
    // Check mobile menu button is visible
    const nav = page.getByRole('navigation');
    const mobileMenuButton = nav.getByRole('button').filter({ has: page.locator('svg path[d*="M4 6h16M4 12h16M4 18h16"]') });
    await expect(mobileMenuButton).toBeVisible();
    
    // Check desktop nav is hidden
    const desktopNav = nav.locator('.hidden.md\\:block');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should have proper lateral margins on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    
    // Check that lateral spaces exist
    const leftSpace = page.locator('.w-16').first();
    const rightSpace = page.locator('.w-16').last();
    
    await expect(leftSpace).toBeVisible();
    await expect(rightSpace).toBeVisible();
    
    // Check main content area has proper background
    const mainContent = page.locator('main.flex-1');
    await expect(mainContent).toBeVisible();
    await expect(mainContent).toHaveClass(/bg-gray-50/);
  });

  test('should have centered content with proper max-width', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto('/');
    
    // Check content container has max-width and is centered
    const contentContainer = page.locator('.max-w-6xl.mx-auto');
    await expect(contentContainer).toBeVisible();
    
    // Check content doesn't exceed viewport width on smaller screens
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(contentContainer).toBeVisible();
  });

  test('should maintain consistent spacing across pages', async ({ page }) => {
    const pages = ['/', '/articles', '/career', '/hire-me'];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      
      // Check consistent padding in content area
      const contentContainer = page.locator('.max-w-6xl.mx-auto');
      await expect(contentContainer).toBeVisible();
      
      // Check navigation height is consistent
      const nav = page.getByRole('navigation');
      const navHeight = await nav.boundingBox();
      expect(navHeight?.height).toBe(64); // h-16 = 64px
    }
  });

  test('should handle theme colors in layout properly', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    // Check light mode layout colors
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-white/);
    
    // Check lateral spaces background
    const leftSpace = page.locator('.w-16').first();
    await expect(leftSpace).toHaveClass(/bg-white/);
    
    // Toggle to dark mode
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    await themeToggle.click();
    await page.waitForTimeout(500);
    
    // Check dark mode layout colors
    await expect(body).toHaveClass(/dark:bg-black/);
    await expect(leftSpace).toHaveClass(/dark:bg-black/);
  });

  test('should have proper footer layout', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    
    // Check footer spans full width with same lateral structure
    const footerLeftSpace = footer.locator('.w-16').first();
    const footerRightSpace = footer.locator('.w-16').last();
    
    await expect(footerLeftSpace).toBeVisible();
    await expect(footerRightSpace).toBeVisible();
    
    // Check footer content is centered
    const footerContent = footer.locator('.flex-1');
    await expect(footerContent).toBeVisible();
  });
});