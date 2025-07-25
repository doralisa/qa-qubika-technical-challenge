import { Page, expect } from '@playwright/test';
import { getEnvironment } from '../config/environments';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    const url = getEnvironment().webUrl;
    await this.page.goto(url);
    await expect(this.getEmailInput()).toBeVisible({ timeout: 10000 });
  }

  async validateLoginPage(): Promise<void> {
    await expect(this.getEmailInput()).toBeVisible({ timeout: 10000 });
    await expect(this.getPasswordInput()).toBeVisible();
    await expect(this.getLoginButton()).toBeVisible();
  }

  getEmailInput() {
    return this.page.locator('input[formcontrolname="email"]');
  }

  getPasswordInput() {
    return this.page.locator('input[formcontrolname="password"]');
  }

  getLoginButton() {
    return this.page.getByRole('button', { name: /autenticar/i });
  }
} 