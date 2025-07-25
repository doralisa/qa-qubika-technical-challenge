# Exercise 2: Playwright E2E Testing

End-to-end automation for Qubika Sports Club Management System.

## Project Explanation

This solution implements a complete E2E workflow combining API and UI automation to test the user journey from account creation to category management. The approach integrates both testing layers in a single test to ensure end-to-end functionality works as expected in real user scenarios.

**Key Design Decision**: Rather than separating API and UI tests, this implementation combines them to mirror actual user workflows where data created via API is immediately used in the UI, providing more realistic test coverage.

## Challenge Requirements

**API Integration**: Create users via API endpoints and use them for UI testing
**UI Automation**: Validate login functionality and category management features  
**End-to-End Flow**: Complete user journey from creation to feature usage
**Professional Structure**: Organized codebase following industry standards

## Test Environment

- **Application**: Qubika Sports Club Management System
- **Base URL**: https://club-administration.qa.qubika.com/#/auth/login
- **API URL**: https://api.club-administration.qa.qubika.com
- **Test Credentials**: Provided for fallback scenarios

## Setup & Run

```bash
# Install dependencies
npm install

# Run tests in headed mode
npx playwright test --headed

# Generate and view report
npx playwright show-report
```

## Test Structure

```
tests/
  └── qubikaSportsClub.spec.ts    # Main E2E test with test.step() organization
pages/
  ├── loginPage.ts                # Login page interactions
  └── categoriesPage.ts           # Category management interactions  
utils/
  ├── apiHelper.ts                # API integration for user management
  └── authHelper.ts               # Authentication flow helpers
config/
  ├── environments.ts             # Environment configuration
  └── testData.ts                 # Test data generators and credentials
```

## Technical Approach & Comments

### Architecture Decisions
- **Single Test File**: Given the challenge scope, one comprehensive test file captures the entire workflow while maintaining readability
- **TypeScript**: Provides better IntelliSense and catches potential issues during development
- **API-First Data Setup**: Creating test users via API is more reliable and faster than UI-based user creation
- **Data-testid Strategy**: Consistent element identification approach

### Implementation Notes
- **Data-testid approach**: Uses consistent element identification strategy
- **API integration**: Proper error handling with graceful fallbacks to provided credentials
- **Clean assertions**: Meaningful error messages that help identify specific failure points

## Improvements Implemented

### Test Organization
- **test.step() Structure**: Clear step-by-step execution with detailed reporting
- **beforeEach Setup**: Automated user creation via API before each test
- **Semantic Locators**: Playwright-recommended selectors for better maintainability

### Code Quality
- **TypeScript Implementation**: Type safety and better IDE support
- **Page Object Pattern**: Organized selectors and actions for maintainability  
- **Environment Management**: Centralized configuration for different environments

### Error Handling
- **Graceful API Fallbacks**: Tests continue with provided credentials if API creation fails
- **Specific Wait Strategies**: Element-based waits instead of generic timeouts
- **Clear Failure Messages**: Descriptive assertions for easier debugging

## Technical Comments

### Challenges Addressed
- **Dynamic UI Elements**: Some form elements load asynchronously, requiring careful wait strategies
- **API Authentication**: Implementing proper API authentication flow for user creation
- **Cross-Browser Compatibility**: Ensuring selectors work consistently across different browsers
- **Test Environment Stability**: Handling scenarios where test environment might have data inconsistencies

### Implementation Notes
- **Data-testid first approach**: Assumes mature team with established automation standards
- **Semantic locators**: Used for verification and user-facing elements where appropriate
- **API integration**: Proper error handling with graceful fallbacks to provided credentials
- **Clean assertions**: Meaningful error messages that help identify specific failure points

### Team Collaboration Notes
This implementation follows **mature automation practices** assuming:
- Development team maintains consistent `data-testid` attributes
- Regular collaboration between QA and Dev teams for automation-friendly markup
- Shared responsibility for maintaining test stability through proper element identification

In scenarios where data-testids are not consistently implemented, the approach would involve:
1. **Coordination with development team** to establish data-testid standards
2. **Gradual migration** from CSS/XPath selectors to semantic locators
3. **Documentation of interim solutions** while implementing best practices

## Potential Enhancements

### Future Improvements
1. **User Cleanup API Endpoint**: Implement DELETE `/api/users/{email}` endpoint to enable proper test data cleanup and prevent database pollution from automated test executions
2. **Page Object Model**: For larger test suites, implementing POM would improve maintainability
3. **Environment Configuration**: Add support for multiple test environments (dev, staging, prod)
4. **Parallel Execution**: Configure tests to run in parallel for faster execution
5. **Custom Reporting**: Implement custom HTML reports with business-friendly test descriptions
6. **Data-Driven Testing**: Parameterize tests to run with different user types or permissions

### Monitoring & Maintenance
- **Visual Testing**: Add screenshot comparison for UI regression detection
- **Performance Metrics**: Monitor page load times and API response times
- **Test Data Management**: Implement more sophisticated test data cleanup strategies
- **CI/CD Integration**: Add pipeline configuration for automated test execution

---

**Author**: QA Automation Engineer  
**Duration**: Limited time challenge implementation  
**Focus**: Core functionality demonstration with room for production enhancements 