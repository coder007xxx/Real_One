Feature: Facebook smoke test 

Scenario: Test login with valid credentials 
	Given I am on the facebook login page 
	When I enter valid username and password 
	And I click on Login button 
	Then I should be able to see the facebook homePage