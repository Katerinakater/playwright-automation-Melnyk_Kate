import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

test('Verify login with valid credentials', async ({ page }) => {
const loginPage = new LoginPage(page);
const accountPage = new AccountPage(page);
await page.goto('/auth/login');
await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');
await expect(accountPage.accountName).toHaveText('Jane Doe');
await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');

});

