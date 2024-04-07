// src/__test__/App.test.js
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

  /** Feature 3 */
  test('renders NumberOfEvents component correctly', () => {
    const { container } = render(<App />);
    const numberOfEventsComponent = container.firstChild.querySelector('#NumberOfEvents');
    expect(numberOfEventsComponent).toBeInTheDocument();
  });
});

describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });

  });
  /**HT Test */
  test('User can change the number of events displayed', async () => {
    const user = userEvent.setup();
    const { getByLabelText, findAllByRole } = render(<App />);

    // Assuming your NumberOfEvents input field is correctly labeled
    const NumberOfEventsInput = getByLabelText(/number of events:/i);

    // First, clear the default value, then type a new value
    await user.type(NumberOfEventsInput, '{backspace}{backspace}10');

    // Await for the events list to update based on the new number of events
    const updatedEventsList = await findAllByRole('listitem');

    // Verify the length of the events list matches the new input
    expect(updatedEventsList).toHaveLength(10);
  });


  
});