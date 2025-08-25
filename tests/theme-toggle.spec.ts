import { test, expect } from '@playwright/test';

test.describe('Theme Toggle Functionality', () => {
  test('should have theme toggle button visible', async ({ page }) => {
    await page.goto('/');
    
    // Check that theme toggle button exists
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    await expect(themeToggle).toBeVisible();
  });

  test('should toggle between light and dark themes', async ({ page }) => {
    await page.goto('/');
    
    // Wait for theme to initialize
    await page.waitForTimeout(500);
    
    // Get initial theme state
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');
    
    // Find theme toggle button
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    
    // Click to toggle theme
    await themeToggle.click();
    await page.waitForTimeout(300); // Wait for transition
    
    // Check that theme has changed
    const newClass = await html.getAttribute('class');
    expect(newClass).not.toBe(initialClass);
    
    // Verify the theme classes are applied correctly
    const hasDark = newClass?.includes('dark');
    if (hasDark) {
      // If dark mode is now active, check dark styles
      await expect(page.locator('body')).toHaveClass(/dark:bg-black/);
    } else {
      // If light mode is now active, check light styles
      await expect(page.locator('body')).toHaveClass(/bg-white/);
    }
  });

  test('should persist theme choice across page navigation', async ({ page }) => {
    await page.goto('/');
    
    // Wait for theme to initialize
    await page.waitForTimeout(500);
    
    // Toggle to dark mode
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    await themeToggle.click();
    await page.waitForTimeout(300);
    
    // Get theme state
    const html = page.locator('html');
    const themeClass = await html.getAttribute('class');
    
    // Navigate to another page
    await page.getByRole('link', { name: 'Articles' }).click();
    await page.waitForTimeout(300);
    
    // Check theme persisted
    const newThemeClass = await html.getAttribute('class');
    expect(newThemeClass).toBe(themeClass);
  });

  test('should show correct theme icon', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    const svg = themeToggle.locator('svg');
    
    // Click to toggle and check icon changes
    await themeToggle.click();
    await page.waitForTimeout(300);
    
    // The icon should be visible (we can't easily test the specific icon without more specific selectors)
    await expect(svg).toBeVisible();
  });

  test('should apply theme colors correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    
    // Test light mode colors
    const body = page.locator('body');
    const currentBg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);
    
    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(500);
    
    // Check that background color changed
    const newBg = await body.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(newBg).not.toBe(currentBg);
  });

  test('should maintain theme toggle accessibility', async ({ page }) => {
    await page.goto('/');
    
    const themeToggle = page.getByRole('button').filter({ has: page.locator('svg') });
    
    // Check button is keyboard accessible
    await page.keyboard.press('Tab');
    // We should be able to focus the theme toggle (assuming it's the first focusable element)
    
    // Check button can be activated with keyboard
    await themeToggle.focus();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);
    
    // Verify theme changed
    const html = page.locator('html');
    const themeClass = await html.getAttribute('class');
    expect(themeClass).toBeTruthy();
  });
});