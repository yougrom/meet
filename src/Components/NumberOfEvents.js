// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = ({currentNOE, setCurrentNOE}) => { // Accept props

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCurrentNOE(value); // Use the function passed down from App to set the value
  };

  return (
    <div id="NumberOfEvents">
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        id="number-of-events"
        type="number"
        value={currentNOE} // Bind input to currentNOE from App
        onChange={handleInputChange}
        min="1"
      />
    </div>
  );
};

export default NumberOfEvents;
