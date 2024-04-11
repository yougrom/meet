import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../Components/NumberOfEvents';

// Load the Gherkin file
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('Displaying default number of events when none is specified', ({ when, then }) => {
    let getByLabelText;
    let currentNOE = '32'; // Assuming 32 is your default value
    const setCurrentNOE = jest.fn(value => {
      currentNOE = value;
    });

    when('the user has not specified a number of events', () => {
      // Assuming the default is set without user action, no need to simulate events here
      ({ getByLabelText } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />));
    });

    then('the application displays 32 events by default', () => {
      expect(getByLabelText(/number of events:/i).value).toBe('32');
    });
  });

  test('User changes the number of events displayed', ({ given, when, and, then }) => {
    let getByLabelText, getByDisplayValue;
    let currentNOE = '32';
    const setCurrentNOE = jest.fn(value => {
      currentNOE = value;
    });

    given('the user is viewing the default number of events', () => {
      ({ getByLabelText, getByDisplayValue } = render(<NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} />));
      expect(getByDisplayValue('32')).toBeTruthy();
    });

    when('the user enters "10" in the "Number of Events" input field', () => {
      const input = getByLabelText(/number of events:/i);
      fireEvent.change(input, { target: { value: '10' } });
    });

    and('the user submits the new number of events', () => {
      // Assuming direct input change triggers the update, you might not need to do anything here.
      // This is just to satisfy the step in the feature file. Adjust if your application has explicit submission logic.
    });

    then('the application updates to display 10 events', () => {
      expect(setCurrentNOE).toHaveBeenCalledWith('10');
      // Depending on how your component updates, you might check the new state or rendered output here.
    });
  });
});