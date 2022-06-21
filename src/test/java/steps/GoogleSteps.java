package steps;

import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import pages.GoogleSearchPage;
import utils.Driver;

public class GoogleSteps {
    // ** Cucumber does not allow inheritance between step classes; thus, Hooks is not able to extends to any classes within Steps package.
    // THIS GOOGLESTEPS CLASS IS TO HOLD ALL STEPS, METHODS, INSTANCE VARIABLE SPECIFIC TO GOOGLE FEATURE / APPLICATION
    // NOTE: the given data information are coming from the feature file --> ex: for this class "Tesla" data input is coming from google.feature

    WebDriver driver;
    GoogleSearchPage googleSearchPage;

    @Before
    public void setup(){
        driver = Driver.getDriver();
        googleSearchPage = new GoogleSearchPage(driver);
    }

    // In Cucumber framework, @Test annotation will be replaced with --> Given, When, And, Then
    // 1ST WAY OF IMPLEMENTING STEPS: COPY / PASTE SNIPPET(S) FROM CONSOLE
    // 2ND WAY OF IMPLEMENTING STEPS: RIGHT-CLICK ON THE STEP(S) IN THE FEATURE FILE > CONTEXT ACTION > ADD STEP

    // TIP: after using WHEN/THEN and you see yourself wanting to use more WHEN/THEN right after then use AND
    // NOTE: in the feature file(s) the best practice is to not have more than 10 scenarios - like in TestNG framework

    @When("user searches for {string} on Google")// --> THIS MUST BE THE EXACT SAME SENTENCE AS IN THE FEATURE FILE (text/case sensitive)
    public void user_search_for_on_google(String key) {
        //driver.findElement(By.name("q")).sendKeys(key, Keys.ENTER);
        googleSearchPage.searchInputBox.sendKeys(key, Keys.ENTER);
    }

    @Then("user should see results are more than {int}")
    public void userShouldSeeResultsAreMoreThan(int result) {
        Assert.assertTrue(Long.parseLong(googleSearchPage.resultBar.getText().split(" ")[1].replace(",", "")) > result);
        // About 10,950,000,000 results (0.98 seconds) --> {About, 10,950,000,000, results, (0.98 seconds)} --> 10950000000 > {int}
    }
}