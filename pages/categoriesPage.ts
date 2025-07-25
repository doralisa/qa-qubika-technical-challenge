import { Page, expect } from '@playwright/test';

export class CategoriesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  getCategoriesLink() {
    return this.page.getByRole('link', { name: 'Tipos de Categorias' });
  }

  getAddButton() {
    return this.page.getByRole('button', { name: /adicionar/i });
  }

  getCategoryNameInput() {
    return this.page.getByLabel('Nombre de categoría');
  }

  getAcceptButton() {
    return this.page.getByRole('button', { name: 'Aceptar' });
  }

  getSubcategoryCheckbox() {
    return this.page.getByLabel('Es subcategoria?');
  }

  getParentCategoryDropdown() {
    return this.page.locator('input[aria-autocomplete="list"]');
  }

  async navigateToCategories(): Promise<void> {
    await this.getCategoriesLink().click();
    await expect(this.getAddButton()).toBeVisible({ timeout: 10000 });
  }

  async createCategory(categoryName: string): Promise<void> {
    await this.getAddButton().click();
    await expect(this.getCategoryNameInput()).toBeVisible();
    await this.getCategoryNameInput().fill(categoryName);
    await this.getAcceptButton().click();
    await expect(this.getAcceptButton()).toBeHidden();
  }

  async verifyCategoryExists(categoryName: string): Promise<void> {
    await expect(
      this.page.locator('.alert-success, .toast-success, .success').first()
    ).toBeVisible({ timeout: 5000 });
  }

  async createSubcategory(parentCategory: string, subcategoryName: string): Promise<void> {
    await this.getAddButton().click();
    await expect(this.getCategoryNameInput()).toBeVisible();
    await this.getCategoryNameInput().fill(subcategoryName);
    await this.getSubcategoryCheckbox().check({ force: true });
    await this.getParentCategoryDropdown().click();
    await this.page.getByText(parentCategory).click();
    await this.getAcceptButton().click();
    await expect(this.getAcceptButton()).toBeHidden();
  }

  async verifySubcategoryExists(subcategoryName: string): Promise<void> {
    await expect(
      this.page.locator('.alert-success, .toast-success, .success').first()
    ).toBeVisible({ timeout: 5000 });
  }
} 