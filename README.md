# Meet App

This React-based application is its user-centric design, ensuring an engaging, accessible, and seamless user experience across all devices and browsers. Key features include direct Google Calendar integration for efficient schedule management, offline functionality as a Progressive Web App, and the ability to install on both desktop and mobile devices for enhanced accessibility. Additionally, the application's high reliability, underscored by exhaustive test-driven development and a test coverage exceeding 90%, guarantees a robust and dependable user experience.

---

## My Project Features & Scenarios

### Feature 2: Show/Hide Event Details

**User Story:** As an user,  
I should be able to show or hide details of events,  
So that I can quickly access more information about events I am interested in and keep the interface clean by hiding details of events I am not interested in.

**Scenario 1:** _An event element is collapsed by default._

- **Given** the user has navigated to the events list page
- **When** the page loads
- **Then** each event element is displayed in a collapsed

**Scenario 2:** _User can expand an event to see details._

- **Given** the user is viewing the events list
  - And an event element is in a collapsed state
- **When** the user clicks on the event element
- **Then** the event element expands
  - And the details of the event are displayed

**Scenario 3:** _User can collapse an event to hide details._

- **Given** the user is viewing the events list
  - And an event element is in an expanded state showing details
- **When** the user clicks on the event element again
- **Then** the event element collapses
  - And the details of the event are hidden

### Feature 3: Specify Number of Events

**User Story:** As an user,  
I should be able to specify the number of events I want to view on the page,  
So that I can customize the amount of information presented to me, making it easier to browse through events without feeling overwhelmed.

**Scenario 1:** _When user hasn’t specified a number, 32 events are shown by default._

- **Given** the user has not specified a number of events to view
- **When** the user navigates to the events list page
- **Then** the page displays 32 events by default

**Scenario 2:** _User can change the number of events displayed._

- **Given** the user is on the events list page
- **When** the user specifies a number of events to display
- **Then** the page updates to display that specific number of events

### Feature 4: Use the App When Offline

**User Story:** As an user,  
I should be able to use the app even when I am offline,  
So that I can access event information without needing an internet connection, ensuring I have the details I need at any time.

**Scenario 1:** _Show cached data when there’s no internet connection._

- **Given** the user has previously loaded event data with an internet connection
  - And now the user is without an internet connection
- **When** the user opens the app
- **Then** the app displays the most recently cached event data

**Scenario 2:** _Show error when user changes search settings (city, number of events) without an internet connection._

- **Given** the user is without an internet connection
  - And the user is on the app's event search page
- **When** the user changes the search settings, such as city or number of events
- **Then** the app displays an error message indicating that changing search settings requires an internet connection

### Feature 5: Add an App Shortcut to the Home Screen

**User Story:** As an user,  
I should be able to add a shortcut of the app to my home screen,  
So that I can quickly access the app without having to navigate through my phone’s browser or app list, making it more convenient to use.

**Scenario 1:** _User can install the meet app as a shortcut on their device home screen._

- **Given** the user is on the meet app webpage in their mobile browser
- **When** the user selects the option to add the app to their home screen
- **Then** the app is added as a shortcut on the user's device home screen
  - And the user can launch the meet app directly from their home screen

### Feature 6: Display Charts Visualizing Event Details

**User Story:** As an user,  
I should be able to view charts that visualize event details,  
So that I can easily understand the types of events available, their popularity, and other statistics at a glance, helping me to make informed decisions about which events to attend

**Scenario 1:** _Show a chart with the number of upcoming events in each city._

- **Given** the user is on the dashboard or analytics page where event data is visualized
- **When** the user navigates to the section displaying the number of upcoming events by city
- **Then** the app displays a chart that visualizes the number of upcoming events in each city
  - And the user can interact with the chart to get more detailed information about events in each city
