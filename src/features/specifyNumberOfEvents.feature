Feature: Specify Number of Events
  Scenario: Displaying default number of events when none is specified
    When the user has not specified a number of events
    Then the application displays 32 events by default

  Scenario: User changes the number of events displayed
    Given the user is viewing the default number of events
    When the user enters "10" in the "Number of Events" input field
    And the user submits the new number of events
    Then the application updates to display 10 events