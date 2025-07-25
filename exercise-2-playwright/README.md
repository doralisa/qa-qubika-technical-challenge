# Exercise 2: Playwright E2E Testing

End-to-end automation for Qubika Sports Club Management System.

## Test Environment

- **Application**: https://club-administration.qa.qubika.com/#/auth/login
- **API**: https://api.club-administration.qa.qubika.com

## Setup & Run

```bash
npm install
npx playwright test --headed
npx playwright show-report
```

## Project Structure

```
tests/
  └── qubikaSportsClub.spec.ts    # Main E2E test
pages/
  ├── loginPage.ts                # Login page interactions
  └── categoriesPage.ts           # Category management
utils/
  ├── apiHelper.ts                # API user management
  └── authHelper.ts               # Authentication helpers
config/
  ├── environments.ts             # Environment configuration
  └── testData.ts                 # Test data and credentials
```

## Test Flow

1. API Setup: Create test user via API
2. UI Login: Authenticate with created user
3. Category Management: Create and validate categories
4. Cleanup: Remove test user (API)

## Features

- TypeScript implementation
- Page Object Pattern
- API integration for test data
- CSS selector strategy
- Structured test reporting with test.step()

## Technical Notes

**Locator Strategy**: Used CSS selectors and semantic locators due to absence of data-testid attributes in the application.

**API Limitations**: User creation works but no DELETE endpoint available for cleanup.

## Improvements for Production

1. **data-testid Implementation**: Add data-testid attributes to key elements
2. **User Cleanup Endpoint**: Implement DELETE `/api/users/{email}` endpoint
3. **Environment Configuration**: Add support for multiple test environments
4. **Parallel Execution**: Configure tests for parallel execution across browsers 