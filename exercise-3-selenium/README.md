# Exercise 3: Selenium WebDriver Automation

UI automation for Qubika website contact form testing.

## Test Requirements

Automated workflow following exact challenge specifications:

1. Navigate to Qubika Website (www.qubika.com)
2. Validate website display (URL + Qubika logo)  
3. Click 'Contact us' button
4. Validate contact form is displayed (Name field, Email field, 'Get in touch' button)
5. Click 'Get in touch' button without filling any field
6. Validate all mandatory fields have error messages
7. Validate only 'Name' field is marked with red color
8. Write 'Test name' on the 'Name' field
9. Click 'Get in touch' button again
10. Validate all mandatory fields have error message except 'Name' field
11. Validate only 'Email' field is marked with red color

**Important**: No form submission occurs - only validation testing as specified.

## Technology Stack

- **Java 8** with Maven
- **Selenium WebDriver 4.x** for browser automation
- **TestNG** for test organization and reporting
- **WebDriverManager** for automatic driver management
- **Page Object Model** for maintainable structure

## Setup & Run

**Prerequisites:**
- Ensure no Chrome browser instances are running before test execution

```bash
java -version
mvn -version
# Close any running Chrome instances for clean test execution
killall "Google Chrome" 2>/dev/null || true
mvn clean test
open target/surefire-reports/index.html
```

## Project Structure

```
src/
├── main/java/
│   ├── pages/
│   │   ├── HomePage.java         # Homepage interactions
│   │   └── ContactPage.java      # Contact form testing
│   └── utils/
│       └── DriverManager.java    # Browser management
└── test/java/
    └── tests/
        ├── BaseTest.java         # Driver setup/teardown
        └── ContactFormTest.java  # Contact form validation workflow
└── test/resources/
    └── testng.xml               # TestNG suite configuration
```

## Features

- Cross-browser support (Chrome, Firefox)
- Page Object Model implementation
- Explicit waits strategy
- Error validation and visual feedback testing
- Comprehensive TestNG reporting

## Technical Notes

**Test Architecture**: Uses BaseTest pattern for driver management.

**Locator Strategy**: Uses stable selectors like ID and name attributes for reliable element identification.

**Form Validation**: Tests form validation behavior including error messages and field highlighting. Clicks submit button to trigger validations but does not submit actual data.

## Improvements for Production

1. **Robust Locators**: Add data-testid attributes for more reliable element identification
2. **Screenshot Capture**: Add automatic screenshot capture on test failures for debugging
3. **Cross-Browser Grid**: Integrate with Selenium Grid for distributed test execution
4. **Reporting Enhancement**: Add custom HTML reports with detailed step-by-step execution logs
5. **Test Data Management**: Implement test data factories for different validation scenarios 