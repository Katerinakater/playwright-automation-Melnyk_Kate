import { Page, Locator } from '@playwright/test';
export class AccountPage {
readonly page: Page;
readonly accountName: Locator;
constructor(page: Page) {
  this.page = page;
  this.accountName = page.getByTestId('nav-menu');
}
}