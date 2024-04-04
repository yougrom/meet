// src/__tests__/NumberOfEvents.test.js

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  beforeEach(() => {
    render(<NumberOfEvents />);
  });

  test('contains an element with the role of spinbutton', () => {
    const spinbutton = screen.getByRole('spinbutton');
    expect(spinbutton).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    const input = screen.getByRole('spinbutton');
    expect(input.value).toBe('32');
  });

  test('value changes when a user types in it', async () => {
    const user = userEvent.setup();
    const input = screen.getByRole('spinbutton');
    await user.clear(input);
    await user.type(input, '10');
    expect(input.value).toBe('10');
  });

});
