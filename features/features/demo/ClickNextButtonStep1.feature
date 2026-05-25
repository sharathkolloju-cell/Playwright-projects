@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    # Acceptance Criteria:
    #   1. The next button should take customers to step two when given valid information.
    #       a. Test by providing all fields
    #       b. Test by providing only the required fields

    Background: 
        Given user is already on enrollment page
    
    Scenario: Verify that clicking next button after provding valid info, will navigate user to step 2
        When user enters the first Name
        And user enters the last Name
        And user enters the email
        And user enters the phone number
        And user selects from how did you hear about us drop down
        And user clicks on the next button
        Then the start application stepper circle color is green
        And the payment plan stepper circle color is blue
        
        
        
