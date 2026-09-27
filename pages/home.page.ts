import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly combinationPliers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.combinationPliers = page.getByText('Combination Pliers', { exact: true });
  }

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async openCombinationPliers(): Promise<void> {
    await this.combinationPliers.click();
  }
}