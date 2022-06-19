@Google
Feature: Google Search Functionality
  #each feauture file must have a feature name
  #to declare all scenarios in the feature file with a tag, we can put tag on the top of feature

@Regression
Scenario: Validate Google Search

  Given user navigates to "https://www.google.com/"
  When user searches for "Tesla" on google
  Then user should see "Tesla" in the url
  And user should see "Tesla" in the title

@Smoke
Scenario: Validate Google Search Results

  Given user navigates to "https://www.google.com/"
  When user searches for "Apple" on google
  Then user should see results are more than 0

