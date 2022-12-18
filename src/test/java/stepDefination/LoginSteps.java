package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;


public class LoginSteps {
	
  WebDriver driver = BaseClass.driver;
	
	@Given("I have opened the application in browser")
	public void i_have_opened_the_application_in_browser() throws InterruptedException {
		
		
		driver.get("https://www.simplilearn.com/");
		
		Thread.sleep(1000);
	   
	}

	@When("I click on login button")
	public void i_click_on_login_button() {
		
		WebElement loginlink=driver.findElement(By.xpath("//a[@class='login']"));
		loginlink.click();
		
	  
	}

	@When("I enter the username")
	public void i_enter_the_username() {
		
		WebElement un=driver.findElement(By.xpath("//input[@name='user_login']"));
		un.sendKeys("creatorshashikiran@gmail.com");
	   
	}

	@When("I enter the Password")
	public void i_enter_the_password() {
		
		WebElement pw=driver.findElement(By.xpath("//input[@name='user_pwd']"));
		pw.sendKeys("Reset@123");
	   
	}

	@When("I click on the login button")
	public void i_click_on_the_login_button() {
	   
		WebElement button=driver.findElement(By.xpath("//input[@name='btn_login']"));
		button.click();
	}

	@Then("I landed on the home page")
	public void i_landed_on_the_home_page() {
		
		
		System.out.println("Inside The HomePage");
		String Title = driver.getTitle();
		System.out.println(Title);
	   
	}

	@When("I enter the username {string}")
	public void i_enter_the_username(String UserName) {
		
		WebElement un=driver.findElement(By.xpath("//input[@name='user_login']"));
		un.sendKeys(UserName);
		
	  
	}

	@When("I enter the Password {string}")
	public void i_enter_the_password(String Password) {
		
		WebElement pw=driver.findElement(By.xpath("//input[@name='user_pwd']"));
		pw.sendKeys(Password);
	    
	}
	
	@Then("I should get error message as {string}")
	public void i_should_get_error_message_as(String actual) {
	    // Write code here that turns the phrase above into concrete actions
		
		WebElement expected=driver.findElement(By.xpath("//div[@class='error_msg']"));
		
		String expectederror=expected.getText();
		
		 Assert.assertEquals(actual, expectederror);
	    
	}
	

}


