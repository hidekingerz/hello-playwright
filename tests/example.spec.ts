import { test, expect } from '@playwright/test';
import  { devices, chromium } from '@playwright/test';
const iPhone = devices['iPhone 6'];

test('has title', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({...iPhone});
  const page = await context.newPage()
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
