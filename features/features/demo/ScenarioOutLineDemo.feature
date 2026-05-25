@sep10
Feature: Enter my personal details

    As a customer, I should be able to enter my Personal details.

    Background:
        Given user is already on enrollment page

    Scenario: Enter valid personal details
        When user enters their first name as "John"
        And user enters thier last name as "Doe"
        And user enters their email as "john@example.com"
        And user enters their phone number as "1234567890"

    Scenario: Enter valid personal details
        When user enters their first name as "Mattn"
        And user enters thier last name as "Josh"
        And user enters their email as "matt@gmail.com"
        And user enters their phone number as "111111"

    Scenario: Enter valid personal details
        When user enters their first name as "Mattn"
        And user enters thier last name as "Josh"
        And user enters their email as "matt@gmail.com"
        And user enters their phone number as "111111"


    # =============================================================

    Scenario Outline: Enter personal details
        When user enters their first name as "<first_name>"
        And user enters thier last name as "<last_name>"
        And user enters their email as "<email>"
        And user enters their phone number as "<phone>"

    Example:
            | first_name | last_name | email            | Phone       | 
            | James      | Aaron     | james@gmail.com  | 1234456789  |
            | John       | Jimmy     | john@yahoo.com   | 76544321345 |
            | Matt       | Hgues     | Matt@outlook.com | 986413274   |



