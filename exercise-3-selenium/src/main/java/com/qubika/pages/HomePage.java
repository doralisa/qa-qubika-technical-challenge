package com.qubika.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.time.Duration;

public class HomePage {
    private final WebDriver driver;
    private final WebDriverWait wait;

    @FindBy(css = "a.logo")
    private WebElement logo;

    @FindBy(css = "#contact-us-button a.link-label")
    private WebElement contactUsButton;

    public HomePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public void navigateToQubika() {
        driver.get("https://www.qubika.com");
    }

    public boolean isLogoDisplayed() {
        wait.until(ExpectedConditions.visibilityOf(logo));
        return logo.isDisplayed();
    }

    public boolean isCorrectUrl() {
        return driver.getCurrentUrl().contains("qubika.com");
    }

    public ContactPage clickContactUs() {
        wait.until(ExpectedConditions.elementToBeClickable(contactUsButton));
        contactUsButton.click();
        return new ContactPage(driver);
    }
} 