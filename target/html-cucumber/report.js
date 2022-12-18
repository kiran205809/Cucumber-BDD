$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the login page of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@S_Login"
    }
  ]
});
formatter.background({
  "name": "Open The Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the succesful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@S_Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open The Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the succesful login using test data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@S_Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"creatorshashikiran@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Reset@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the succesful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the Password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "creatorkiran@gmail.com",
        "Reset@123"
      ]
    },
    {
      "cells": [
        "creatorshashikiran@gmail.com",
        "Reset@123"
      ]
    }
  ]
});
formatter.background({
  "name": "Open The Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the succesful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@S_Login"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"creatorkiran@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Reset@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open The Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the succesful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@S_Login"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"creatorshashikiran@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Reset@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open The Application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the unsuccesfulllogin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@S_Login"
    }
  ]
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the username \"creatorkiran@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the Password \"Reset@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_the_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});