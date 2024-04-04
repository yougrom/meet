// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32); // Default number of events

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
  };

  return (
    <div id="NumberOfEvents">
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        id="number-of-events"
        type="number"
        value={numberOfEvents}
        onChange={handleInputChange}
        min="1" // Prevents the user from entering a value less than 1
      />
    </div>
  );
};

export default NumberOfEvents;
