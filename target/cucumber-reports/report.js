$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/HeroAppLogin.feature");
formatter.feature({
  "name": "Hero App Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "name": "user should see a message starts with \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Your username is invalid!"
      ]
    },
    {
      "cells": [
        "johndoe",
        "abcd1234",
        "Your username is invalid!"
      ]
    },
    {
      "cells": [
        "tomsmith",
        "12345",
        "Your password is invalid!"
      ]
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword",
        "Your password is invalid!"
      ]
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!",
        "You logged into a secure area!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Form Authentication\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"\" and password as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userEntersUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a message starts with \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeAMessageStartsWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Form Authentication\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"johndoe\" and password as \"abcd1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userEntersUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a message starts with \"Your username is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeAMessageStartsWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Form Authentication\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"tomsmith\" and password as \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userEntersUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a message starts with \"Your password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeAMessageStartsWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Form Authentication\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"tomsmith\" and password as \"SuperSecretPassword\"",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userEntersUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a message starts with \"Your password is invalid!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeAMessageStartsWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"http://the-internet.herokuapp.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Form Authentication\" link",
  "keyword": "When "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnLink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate form authentication page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user enters username as \"tomsmith\" and password as \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userEntersUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "HeroAppSteps.userClicksOnButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see a message starts with \"You logged into a secure area!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HeroAppSteps.userShouldSeeAMessageStartsWith(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});