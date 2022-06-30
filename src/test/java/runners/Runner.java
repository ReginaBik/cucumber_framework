package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        // define PATH of where each category is
        features = "src/test/resources/features",
        glue = "steps",
        tags = "", // this is like groups/suite; if left "" then it'll run ALL feature files scenarios
        dryRun = false, // used to compile cucumber features files and step definitions; shows any missing steps/implementation
        monochrome = false, // used to make the Cucumber test console output more readable
        plugin = {"html:target/cucumber-reports",
                "json:target/cucumber-reports/Cucumber.json",
                "pretty"
        }
)

public class Runner {
}