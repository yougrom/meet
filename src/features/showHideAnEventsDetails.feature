Feature: Show/Hide Event Details

  Scenario: An event element is collapsed by default
    Given I am on the main page where events are listed
    When I look at the events listed
    Then each event element is collapsed by default
    And does not show detailed information about the event

  Scenario: User can expand an event to see details
    Given I am on the main page where events are listed
    And an event element is collapsed
    When I click on the event element
    Then the event element expands
    And shows detailed information about the event

  Scenario: User can collapse an event to hide details
    Given I am viewing an expanded event element with details shown
    When I click on the event element again
    Then the event element collapses
    And hides the detailed information about the event