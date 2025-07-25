package com.qubika.tests;

import com.qubika.utils.DriverManager;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

public class BaseTest {
    protected WebDriver driver;
    private DriverManager driverManager;

    @BeforeMethod
    public void setUp() {
        driverManager = new DriverManager();
        driver = driverManager.createDriver("chrome");
    }

    @AfterMethod
    public void tearDown() {
        driverManager.quitDriver();
    }
} 