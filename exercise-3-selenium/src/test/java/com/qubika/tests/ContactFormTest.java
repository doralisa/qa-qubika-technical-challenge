package com.qubika.tests;

import com.qubika.pages.ContactPage;
import com.qubika.pages.HomePage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class ContactFormTest extends BaseTest {

    private HomePage homePage;
    private ContactPage contactPage;

    @Test(description = "Qubika website contact form validation workflow")
    public void testQubikContactFormValidation() {
        homePage = new HomePage(driver);
        
        homePage.navigateToQubika();
        
        Assert.assertTrue(homePage.isCorrectUrl(), "URL should contain qubika.com");
        Assert.assertTrue(homePage.isLogoDisplayed(), "Qubika logo should be visible");
        
        contactPage = homePage.clickContactUs();
        
        Assert.assertTrue(contactPage.isNameFieldVisible(), "Name field should be displayed");
        Assert.assertTrue(contactPage.isEmailFieldVisible(), "Email field should be displayed");
        Assert.assertTrue(contactPage.isGetInTouchButtonVisible(), "'Get in touch' button should be displayed");
        
        contactPage.clickGetInTouchWithoutFilling();
        
        Assert.assertTrue(contactPage.hasErrorMessages(), "All mandatory fields should have error messages");
        
        Assert.assertTrue(contactPage.isNameFieldMarkedRed(), "Name field should be marked with red color");
        
        contactPage.fillNameAndClickGetInTouch("Test name");
        
        Assert.assertTrue(contactPage.hasErrorMessages(), "Email field should still have error message");
        
        Assert.assertTrue(contactPage.isEmailFieldMarkedRed(), "Email field should be marked with red color");
    }
} 