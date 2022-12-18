Feature: This feature would be creating a calculator for add and substract

  Scenario: To add two numbers
    Given I have a calculator
    When I add 4 and 5
    Then I should get result as 9

  Scenario: To sub two numbers
    Given I have a calculator
    When I sub 6 and 2
    Then I should get result as 4

  Scenario Outline: To add two numbers using multiple value
    Given I have a calculator
    When I add <num1> and <num2>
    Then I should get result as <res>

    Examples: 
      | num1 | num2 | res |
      |    4 |    5 |   9 |
      |    5 |    7 |  12 |
      |    1 |    3 |   4 |

  Scenario Outline: To sub two numbers using mulitple value
    Given I have a calculator
    When I sub <num1> and <num2>
    Then I should get result as <res>

    Examples: 
      | num1 | num2 | res |
      |    6 |    3 |   3 |
      |    4 |    2 |   2 |

  Scenario: add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers
      | 5 |
      | 2 |
      | 6 |
      | 6 |
    Then I should get result as 19

  Scenario: add multiple numbers using cucumber data table
    Given I have a calculator
    When I add below numbers using list
      |  5 |
      |  2 |
      |  6 |
      |  6 |
      | 10 |
    Then I should get result as 29

  Scenario: To calculate total bill of the order
    Given I have a calculator
    When I order below items
      | coffee | 15 |
      | tea    | 12 |
    Then I should get result as 27

  Scenario: To calculate total bill of the order
    Given I have a calculator
    When I order below items using quantity
      | coffee | 1 | 15 |
      | tea    | 2 | 13 |
      | Dose   | 3 | 35 |
    Then I should get result as 146
