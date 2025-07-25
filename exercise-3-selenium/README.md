# Exercise 3: Selenium WebDriver Automation

UI automation for Qubika website contact form testing.

## Overview

This solution implements UI testing for the Qubika website contact form validation, focusing on form error handling and field highlighting behaviors.

## Test Requirements

1. Navigate to www.qubika.com
2. Validate URL and logo
3. Access contact form
4. Test form validation (empty submission, partial completion)
5. Verify error messages and field highlighting

## Technology Stack

- **Java 17** with Maven
- **Selenium WebDriver 4.x** for browser automation
- **TestNG** for test organization and reporting
- **WebDriverManager** for automatic driver management
- **Page Object Model** for maintainable structure

## Setup & Run

```bash
# Check requirements
java -version
mvn -version

# Run tests
mvn clean test

# View reports
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
│       ├── DriverManager.java    # Browser management
│       └── ReportManager.java    # Test reporting
└── test/java/
    └── tests/
        └── ContactFormTest.java  # Main test class
```

## Features

- Cross-browser support (Chrome, Firefox, Edge)
- Page Object Model implementation
- Explicit waits strategy
- Error validation and visual feedback testing
- Screenshot capture on failures
- Comprehensive TestNG reporting 