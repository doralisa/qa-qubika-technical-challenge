import { test, expect } from '@playwright/test';
import { ApiHelper } from '../utils/apiHelper';
import { AuthHelper } from '../utils/authHelper';
import { LoginPage } from '../pages/loginPage';
import { CategoriesPage } from '../pages/categoriesPage';
import { TEST_CREDENTIALS, TEST_CATEGORY_DATA } from '../config/testData';

test.describe('Qubika Sports Club E2E Tests', () => {
  let apiHelper: ApiHelper;
  let loginCredentials = TEST_CREDENTIALS;

  test.beforeEach(async () => {
    apiHelper = new ApiHelper();
    const userResult = await apiHelper.createUser();

    if (userResult.success && userResult.data) {
      loginCredentials = userResult.data;
      console.log(`Using created user: ${loginCredentials.email}`);
    } else {
      loginCredentials = TEST_CREDENTIALS;
    }
  });

  test('Complete E2E workflow: Create user via API, login, and manage categories', async ({ page }) => {
    const authHelper = new AuthHelper(page);
    const loginPage = new LoginPage(page);
    const categoriesPage = new CategoriesPage(page);

    await test.step('Navigate and validate login page', async () => {
      await loginPage.navigate();
      await loginPage.validateLoginPage();
    });

    await test.step('Login with user credentials', async () => {
      await authHelper.login(loginCredentials);
      await authHelper.verifyLoginSuccess();
    });

    await test.step('Navigate to Categories section', async () => {
      await categoriesPage.navigateToCategories();
    });

    const categoryName = TEST_CATEGORY_DATA.categoryName();
    const subcategoryName = TEST_CATEGORY_DATA.subcategoryName();

    await test.step('Create and verify category', async () => {
      await categoriesPage.createCategory(categoryName);
      await categoriesPage.verifyCategoryExists(categoryName);
    });

    await test.step('Create and verify subcategory', async () => {
      await categoriesPage.createSubcategory(categoryName, subcategoryName);
      await categoriesPage.verifySubcategoryExists(subcategoryName);
    });
  });
}); 