import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {
  test('should load homepage (about page) successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads
    await expect(page).toHaveTitle(/Marcos Nikel - Portfolio/);
    
    // Check main heading
    await expect(page.getByRole('heading', { name: /About Marcos Nikel/ })).toBeVisible();
    
    // Check navigation is present
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should navigate to all pages', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to Articles
    await page.getByRole('link', { name: 'Articles' }).click();
    await expect(page).toHaveURL('/articles');
    await expect(page.getByRole('heading', { name: 'Articles' })).toBeVisible();
    
    // Test navigation to Career
    await page.getByRole('link', { name: 'Career' }).click();
    await expect(page).toHaveURL('/career');
    await expect(page.getByRole('heading', { name: 'Career' })).toBeVisible();
    
    // Test navigation to Hire Me
    await page.getByRole('link', { name: 'Hire Me' }).click();
    await expect(page).toHaveURL('/hire-me');
    await expect(page.getByRole('heading', { name: 'Hire Me' })).toBeVisible();
    
    // Test navigation back to About (home)
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/');
    await expect(page.getByRole('heading', { name: /About Marcos Nikel/ })).toBeVisible();
  });

  test('should show active page in navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check that About is active on homepage
    const aboutLink = page.getByRole('link', { name: 'About' });
    await expect(aboutLink).toHaveClass(/bg-red-600/);
    
    // Navigate to articles and check active state
    await page.getByRole('link', { name: 'Articles' }).click();
    const articlesLink = page.getByRole('link', { name: 'Articles' });
    await expect(articlesLink).toHaveClass(/bg-red-600/);
  });

  test('should display profile image in navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check that the profile image loads
    const profileImage = page.getByRole('img', { name: 'Marcos Nikel' });
    await expect(profileImage).toBeVisible();
    await expect(profileImage).toHaveAttribute('src', '/me.jpeg');
  });

  test('should have working footer navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check footer is visible
    const footer = page.getByRole('contentinfo');
    await expect(footer).toBeVisible();
    
    // Check copyright notice
    await expect(footer.getByText('© Marcos Nikel. All Rights Reserved.')).toBeVisible();
    
    // Test footer navigation links
    const footerArticlesLink = footer.getByRole('link', { name: 'Articles' });
    await expect(footerArticlesLink).toBeVisible();
  });
});