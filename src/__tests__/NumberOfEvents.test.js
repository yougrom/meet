// src/__tests__/NumberOfEvents.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../Components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let setCurrentNOE = jest.fn();
  beforeEach(() => {
    // Render the component with the mock function and initial value

    render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} setErrorAlert={() => {  }} />);
  });

  test('contains an element with the role of spinbutton', () => {
    const spinbutton = screen.getByRole('spinbutton');
    expect(spinbutton).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    const input = screen.getByRole('spinbutton');
    expect(input.value).toBe('32');
  });

  test('value changes when a user types in it', () => {
    const input = screen.getByRole('spinbutton');
    const changeEvent = { target: { value: '10' } };
    fireEvent.change(input, changeEvent); // Simulate changing the input value to '10'
    expect(setCurrentNOE).toHaveBeenCalledWith('10'); // Assert that setCurrentNOE was called with '10'
  });
});
