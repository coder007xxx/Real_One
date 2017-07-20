package stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepscode {

	private static WebDriver driver = null;
	private String uRL = "https://www.fb.com/";

	@Given("^I am on the facebook login page$")
	public void I_am_on_the_facebook_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/Users/S007/Desktop/QA Automation/ChromeDriver/chromedriver");
		driver = new ChromeDriver();
		// driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(uRL);
		// driver.manage().window().maximize();

	}

	@When("^I enter valid username and password$")
	public void I_enter_valid_username_and_password() throws Throwable {
		driver.findElement(By.id("email")).sendKeys("saqib@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("sahshkj");
	}

	@When("^I click on Login button$")
	public void I_click_on_Login_button() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
		Thread.sleep(1000);
	}

	@Then("^I should be able to see the facebook homePage$")
	public void I_should_be_able_to_see_the_facebook_homePage() throws Throwable {
		driver.getTitle();
		driver.quit();

	}

}