$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("learn.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook smoke test",
  "description": "",
  "id": "facebook-smoke-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "facebook-smoke-test;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should be able to see the facebook homePage",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepscode.I_am_on_the_facebook_login_page()"
});
formatter.result({
  "duration": 2453438783,
  "status": "passed"
});
formatter.match({
  "location": "Stepscode.I_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 364566930,
  "status": "passed"
});
formatter.match({
  "location": "Stepscode.I_click_on_Login_button()"
});
formatter.result({
  "duration": 2360499742,
  "status": "passed"
});
formatter.match({
  "location": "Stepscode.I_should_be_able_to_see_the_facebook_homePage()"
});
formatter.result({
  "duration": 84345310,
  "status": "passed"
});
});