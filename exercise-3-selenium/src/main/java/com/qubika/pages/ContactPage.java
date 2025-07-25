package com.qubika.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.time.Duration;
import java.util.List;

public class ContactPage {
    private final WebDriver driver;
    private final WebDriverWait wait;
    private final Actions actions;
    
    private static final String ERROR_MESSAGE = "Please complete this required field.";

    @FindBy(name = "firstname")
    private WebElement firstNameField;

    @FindBy(name = "email")
    private WebElement emailField;

    @FindBy(css = "input[value='Submit']")
    private WebElement submitButton;

    public ContactPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        this.actions = new Actions(driver);
        PageFactory.initElements(driver, this);
    }

    public boolean isNameFieldVisible() {
        wait.until(ExpectedConditions.visibilityOf(firstNameField));
        return firstNameField.isDisplayed();
    }

    public boolean isEmailFieldVisible() {
        return emailField.isDisplayed();
    }

    public boolean isGetInTouchButtonVisible() {
        return submitButton.isDisplayed();
    }

    public void clickGetInTouchWithoutFilling() {
        wait.until(ExpectedConditions.elementToBeClickable(submitButton));
        submitButton.click();
    }

    public void fillNameAndClickGetInTouch(String name) {
        wait.until(ExpectedConditions.visibilityOf(firstNameField));
        firstNameField.clear();
        firstNameField.sendKeys(name);
        wait.until(ExpectedConditions.elementToBeClickable(submitButton));
        submitButton.click();
    }

    public boolean hasErrorMessages() {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".hs-error-msg")));
        List<WebElement> errorElements = driver.findElements(By.cssSelector(".hs-error-msg"));
        return errorElements.stream()
                .anyMatch(element -> element.getText().equals(ERROR_MESSAGE));
    }

    public boolean isNameFieldMarkedRed() {
        return hasFieldError(firstNameField);
    }

    public boolean isEmailFieldMarkedRed() {
        return hasFieldError(emailField);
    }

    private boolean hasFieldError(WebElement field) {
        String fieldName = field.getAttribute("name");
        WebElement fieldContainer = driver.findElement(By.cssSelector(".hs_" + fieldName));
        List<WebElement> errorMessages = fieldContainer.findElements(By.cssSelector(".hs-error-msg"));
        return errorMessages.stream()
                .anyMatch(msg -> msg.getText().equals(ERROR_MESSAGE));
    }
} 