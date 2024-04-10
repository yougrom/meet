// src/components/Event.js

import React, { useState } from 'react';

const Event = ({ event }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li className="event">
      <h2>{event.summary}</h2>
      <p>Starts: {new Date(event.created).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <button className="details-btn" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Details' : 'show details'}
      </button>
      {isVisible && (
        <div className="event-details">
          <p>Description: {event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
