package stepDefination;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)


@CucumberOptions(
		
		
		plugin = {"html:target/html-cucumber"},
		
		features = "src/test/java/features",
		//tags = {"@Sanity, @Regression"},
		
				tags = {"@S_Login"},
		
		glue = {"stepDefination"}
		
		
		
		)

public class TestRunner {

}
