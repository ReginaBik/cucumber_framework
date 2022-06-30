import com.github.javafaker.Faker;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import utils.Driver;

public class rSteps {
    @Test
    public void getRandomDate(){
        Faker faker = new Faker();
        Driver.getDriver().get("https://www.google.com/");
        Driver.getDriver().findElement(By.name("q")).sendKeys(faker.gameOfThrones().dragon()+ Keys.ENTER);

        System.out.println(faker.artist().name());
        System.out.println(faker.name().fullName());
        System.out.println("Random GOT quotes = " + faker.gameOfThrones().quote());
        System.out.println("Random GOT artist = " + faker.gameOfThrones().character());
        System.out.println("Random GOT  = " + faker.gameOfThrones().house());
        System.out.println("Hobbits  = " + faker.hobbit().character());
        System.out.println(faker.address().fullAddress());


    }


}