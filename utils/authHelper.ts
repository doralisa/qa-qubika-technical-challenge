import { Page, expect } from '@playwright/test';
import { TestCredentials } from '../config/testData';

export class AuthHelper {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(credentials: TestCredentials): Promise<void> {
    await this.page.locator('input[formcontrolname="email"]').fill(credentials.email);
    await this.page.locator('input[formcontrolname="password"]').fill(credentials.password);
    await this.page.getByRole('button', { name: /autenticar/i }).click();
  }

  async verifyLoginSuccess(): Promise<void> {
    await expect(
      this.page.locator('.navbar-nav, [routerlink]').first()
    ).toBeVisible({ timeout: 10000 });
  }
} 