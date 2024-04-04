//  src/__tests__/Event.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Event from '../Components/Event';

const mockEvent = {
  summary: 'Test Event',
  created: '2023-04-04T10:00:00Z',
  location: 'Berlin',
  description: 'Event Description',
};

describe('Event', () => {
  beforeEach(() => {
    // Render Event component before each test
    render(<Event event={mockEvent} />);
  });

  test('renders event start time based on `created` property', () => {
    const expectedStartTime = new Date(mockEvent.created).toLocaleString();
    expect(screen.getByText(`Starts: ${expectedStartTime}`)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(screen.getByText(`Location: ${mockEvent.location}`)).toBeInTheDocument();
  });

  test('renders "show details" button when event details are hidden', () => {
    expect(screen.getByText('show details')).toBeInTheDocument();
    // Ensure event details are not shown initially
    expect(screen.queryByText(`Description: ${mockEvent.description}`)).toBeNull();
  });

  test('shows event details when "show details" button is clicked', () => {
    // Simulate clicking the "show details" button
    fireEvent.click(screen.getByText('show details'));
    // Check if the "Hide Details" button is shown
    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    // Check if event details are displayed
    expect(screen.getByText(`Description: ${mockEvent.description}`)).toBeInTheDocument();
  });

  test('hides event details when "Hide Details" button is clicked', async () => {
    // First, show the event details
    fireEvent.click(screen.getByText('show details'));
    // Then, hide the event details
    fireEvent.click(screen.getByText('Hide Details'));
    // Check if the "show details" button is shown again
    expect(screen.getByText('show details')).toBeInTheDocument();
    // Check if event details are no longer displayed
    expect(screen.queryByText(`Description: ${mockEvent.description}`)).toBeNull();
  });
});
