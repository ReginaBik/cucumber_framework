Feature: Hero App Login Functionality

  Scenario: Validate form authentication page invalid username message
    Given user navigates to "http://the-internet.herokuapp.com/"
    When user clicks on "Form Authentication" link
    And user enters username as "johndoe" and password as "12345"
    And user clicks on "Login" button
    Then user should see a message starts with "Your username is invalid!"