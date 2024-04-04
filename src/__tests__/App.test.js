// src/__test__/App.test.js
import { render } from '@testing-library/react';
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

