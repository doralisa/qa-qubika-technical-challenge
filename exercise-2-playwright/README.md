# Exercise 2: Playwright E2E Testing

End-to-end automation for Qubika Sports Club Management System.

## Overview

This solution implements E2E testing combining API and UI automation for the complete user journey from account creation to category management.

## Test Environment

- **Application**: https://club-administration.qa.qubika.com/#/auth/login
- **API**: https://api.club-administration.qa.qubika.com

## Setup & Run

```bash
# Install dependencies
npm install

# Run tests
npx playwright test --headed

# View report
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

1. **API Setup**: Create test user via API
2. **UI Login**: Authenticate with created user
3. **Category Management**: Create and validate categories
4. **Cleanup**: Remove test user (API)

## Features

- TypeScript implementation
- Page Object Pattern
- API integration for test data
- data-testid locator strategy
- Structured test reporting with test.step() 