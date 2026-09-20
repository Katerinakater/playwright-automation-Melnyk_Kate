import { test, expect } from '@playwright/test';
import { validUser } from '../test-data/users';

test('Verify login with valid credentials', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByLabel('Email').fill(validUser.email);
    await page.getByTestId('password').fill(validUser.password);
    await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL('/account');
await expect(page).toHaveTitle('Overview - Practice Software Testing - Toolshop - v5.0');
await expect(page.getByText('Jane Doe')).toBeVisible();
});

