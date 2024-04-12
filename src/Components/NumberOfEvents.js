// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = ({currentNOE, setCurrentNOE, setErrorAlert}) => { // Accept props

  const [numEvents, setNumEvents] = useState("32");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCurrentNOE(value); // Use the function passed down from App to set the value

    let infoText;
    if (isNaN(value) || value <= 0) {
      infoText = "Only positive numbers are allowed"
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  }
    
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
