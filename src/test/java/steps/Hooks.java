package steps;

import cucumber.api.java.After;
import org.openqa.selenium.WebDriver;
import utils.Driver;

public class Hooks {

 @After
    public void teardown(){
     Driver.quitDriver();
 }

}
