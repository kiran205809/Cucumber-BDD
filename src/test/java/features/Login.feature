@S_Login
Feature: This feature would be used to design the login page of the application

  Background: Open The Application
    Given I have opened the application in browser
  @Sanity
  Scenario: Validate the succesful login
    When I click on login button
    And I enter the username
    And I enter the Password
    And I click on the login button
    Then I landed on the home page
  @Sanity
  Scenario: Validate the succesful login using test data
    When I click on login button
    And I enter the username "creatorshashikiran@gmail.com"
    And I enter the Password "Reset@123"
    And I click on the login button
    Then I landed on the home page
  @Regression @Rapid
  Scenario Outline: Validate the succesful login using multiple test data
    When I click on login button
    And I enter the username "<UserName>"
    And I enter the Password "<Password>"
    And I click on the login button
    Then I landed on the home page

    Examples: 
      | UserName                     | Password  |
      | creatorkiran@gmail.com       | Reset@123 |
      | creatorshashikiran@gmail.com | Reset@123 |

  Scenario: Validate the unsuccesfulllogin
    When I click on login button
    And I enter the username "creatorkiran@gmail.com"
    And I enter the Password "Reset@123"
    And I click on the login button
    Then I should get error message as "The email or password you have entered is invalid."
