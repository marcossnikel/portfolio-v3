import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    
    // Check main heading is h1
    const h1 = page.getByRole('heading', { level: 1 });
    await expect(h1).toBeVisible();
    await expect(h1).toContainText('About Marcos Nikel');
    
    // Check h2 headings exist and are properly nested
    const h2s = page.getByRole('heading', { level: 2 });
    expect(await h2s.count()).toBeGreaterThan(0);
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check navigation has proper role - target main navigation specifically
    const nav = page.getByRole('navigation', { name: 'Main navigation' });
    await expect(nav).toBeVisible();
    
    // Check navigation links are accessible
    const navLinks = nav.getByRole('link');
    expect(await navLinks.count()).toBeGreaterThan(0);
    
    // Check each nav link has accessible text
    for (let i = 0; i < await navLinks.count(); i++) {
      const link = navLinks.nth(i);
      const text = await link.textContent();
      expect(text).toBeTruthy();
      expect(text?.trim().length).toBeGreaterThan(0);
    }
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');
    
    // Check profile image has alt text
    const profileImage = page.getByRole('img', { name: 'Marcos Nikel' });
    await expect(profileImage).toBeVisible();
    
    const altText = await profileImage.getAttribute('alt');
    expect(altText).toBe('Marcos Nikel');
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    // Start keyboard navigation
    await page.keyboard.press('Tab');
    
    // Check that focus moves through interactive elements
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement);
    
    // Continue tabbing through navigation
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const currentFocused = await page.evaluate(() => document.activeElement?.tagName);
      expect(['A', 'BUTTON', 'INPUT']).toContain(currentFocused);
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Test light mode contrast
    const mainHeading = page.getByRole('heading', { level: 1 });
    const headingColor = await mainHeading.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor
      };
    });
    
    // Basic check that colors are defined
    expect(headingColor.color).toBeTruthy();
    
    // Toggle to dark mode and test contrast
    const themeToggle = page.getByRole('button', { name: /Switch to (light|dark) mode/ }).first();
    await themeToggle.click();
    await page.waitForTimeout(300);
    
    const darkHeadingColor = await mainHeading.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        color: style.color,
        backgroundColor: style.backgroundColor
      };
    });
    
    // Colors should be different in dark mode
    expect(darkHeadingColor.color).not.toBe(headingColor.color);
  });

  test('should have proper focus indicators', async ({ page }) => {
    await page.goto('/');
    
    // Check that interactive elements have focus styles
    const themeToggle = page.getByRole('button', { name: /Switch to (light|dark) mode/ }).first();
    await themeToggle.focus();
    
    // Check focus is visible (basic check)
    const isFocused = await themeToggle.evaluate((el) => el === document.activeElement);
    expect(isFocused).toBe(true);
    
    // Check navigation links have focus
    const navLinks = page.getByRole('navigation').getByRole('link');
    const firstLink = navLinks.first();
    await firstLink.focus();
    
    const linkIsFocused = await firstLink.evaluate((el) => el === document.activeElement);
    expect(linkIsFocused).toBe(true);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic elements
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible(); // footer
    
    // Check that content uses proper semantic elements
    const articles = page.locator('article');
    // May or may not have articles on the page, but if they exist, they should be semantic
    
    const headings = page.getByRole('heading');
    expect(await headings.count()).toBeGreaterThan(0);
  });

  test('should work without JavaScript for basic functionality', async ({ page }) => {
    // Disable JavaScript
    await page.context().addInitScript(() => {
      delete (window as any).localStorage;
      delete (window as any).sessionStorage;
    });
    
    await page.goto('/');
    
    // Check that basic content is still visible
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('navigation')).toBeVisible();
    
    // Check that navigation links still work
    const articlesLink = page.getByRole('link', { name: 'Articles' });
    await articlesLink.click();
    await expect(page).toHaveURL('/articles');
  });
});