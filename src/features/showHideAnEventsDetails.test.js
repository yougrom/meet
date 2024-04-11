// src/components/__tests__/Event.feature.test.js

import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Event from '../Components/Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then, and }) => {
    given('I am on the main page where events are listed', () => {
      render(<Event event={{ summary: 'Test Event', created: new Date().toString(), location: 'Test Location', description: 'Test Description' }} />);
    });

    when('I look at the events listed', () => {
      // Viewing the component is handled in the `given` step.
    });

    then('each event element is collapsed by default', () => {
      expect(screen.queryByTestId('event-details')).not.toBeInTheDocument();
    });

    and('does not show detailed information about the event', () => {
      // This is effectively the same assertion as the previous step.
    });
  });

  test('User can expand an event to see details', ({ given, when, then, and }) => {
    given('I am on the main page where events are listed', async () => {
      render(<Event event={{ summary: 'Test Event', created: new Date().toString(), location: 'Test Location', description: 'Test Description' }} />);
    });

    and('an event element is collapsed', () => {
      // Ensured by the component's initial state.
    });

    when('I click on the event element', async () => {
      await userEvent.click(screen.getByText(/show details/i));
    });

    then('the event element expands', async () => {
      const eventDetails = await screen.findByTestId('event-details');
      expect(eventDetails).toBeInTheDocument();
    });

    and('shows detailed information about the event', () => {
      expect(screen.getByTestId('event-details')).toHaveTextContent('Test Description');
    });
  });

  test('User can collapse an event to hide details', ({ given, when, then, and }) => {
    given('I am viewing an expanded event element with details shown', async () => {
      render(<Event event={{ summary: 'Test Event', created: new Date().toString(), location: 'Test Location', description: 'Test Description' }} />);
      await userEvent.click(screen.getByText(/show details/i));
    });

    when('I click on the event element again', async () => {
      await userEvent.click(screen.getByText(/hide details/i));
    });

    then('the event element collapses', () => {
      expect(screen.queryByTestId('event-details')).not.toBeInTheDocument();
    });

    and('hides the detailed information about the event', () => {
      // This is effectively checked in the previous assertion.
    });
  });
});
