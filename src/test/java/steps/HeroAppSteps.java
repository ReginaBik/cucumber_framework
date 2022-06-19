package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import pages.HeroAppPage;
import utils.Driver;
import utils.Waiter;

public class HeroAppSteps {
    WebDriver driver;
    HeroAppPage heroAppPage;

    @Before
    public void setup() {
        driver = Driver.getDriver();
        heroAppPage = new HeroAppPage();
    }

    @When("user clicks on {string} link")
    public void userClicksOnLink(String linkText) {
        heroAppPage.clickOnCategoryLink(linkText);
        Waiter.pause(5);
    }

    @Then("user should see {string} heading")
    public void userShouldSeeHeading(String headingText) {
        Assert.assertTrue(heroAppPage.addRemoveHeading3.isDisplayed());
        Assert.assertEquals(headingText, heroAppPage.addRemoveHeading3.getText());
    }

    @And("user should see {string} button")
    public void userShouldSeeButton(String buttonText) {
        switch (buttonText) {
            case "Add Element":
                Assert.assertTrue(heroAppPage.addElementButton.isDisplayed());
                Assert.assertTrue(heroAppPage.addElementButton.isEnabled());
                Assert.assertEquals(buttonText, heroAppPage.addElementButton.getText());
                break;
            case "Delete":
                Assert.assertTrue(heroAppPage.deleteElementButton.isDisplayed());
                Assert.assertTrue(heroAppPage.deleteElementButton.isEnabled());
                Assert.assertEquals(buttonText, heroAppPage.deleteElementButton.getText());
                break;
            default:
                throw new NotFoundException("The button text is not defined properly in the feature file!!!");
        }
    }

    @When("user clicks on {string} button")
    public void userClicksOnButton(String buttonText) {
        switch (buttonText){
            case "Add Element":
                heroAppPage.addElementButton.click();
                break;
            case "Delete":
                heroAppPage.deleteElementButton.click();
                break;
            default:
                throw new NotFoundException("The button text is not defined properly in the feature file!!!");
        }
    }

    @Then("user should not see {string} button")
    public void userShouldNotSeeButton(String buttonText) {
        switch (buttonText){
            case "Delete":
                try {
                    Assert.assertFalse(heroAppPage.deleteElementButton.isDisplayed());
                }
                catch (NoSuchElementException e){
                    Assert.assertTrue(true);
                }
                break;
            default:
                throw new NotFoundException("The button text is not defined properly in the feature file!!!");
        }
    }
}