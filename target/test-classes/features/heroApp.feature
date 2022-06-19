Feature: HeroApp Functionalities

  Scenario: Validate add/remove element page

  Given user navigates to "http://the-internet.herokuapp.com/"
  When user clicks on "Add/Remove Elements" link
  Then user should see "Add/Remove Elements" heading
  And user should see "Add Element" button
  When user clicks on "Add Element" button
  Then user should see "Delete" button
  When user clicks on "Delete" button
  Then user should not see "Delete" button