// src/App.js

import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './Components/CitySearch';
import EventList from './Components/EventList';
import NumberOfEvents from './Components/NumberOfEvents';

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]); // Add currentNOE as a dependency

  const fetchData = async () => {
    const allEvents = await getEvents(); // Assume getEvents can now accept a limit parameter
    const filteredEvents = currentCity === "See all cities" ?
      allEvents.slice(0, currentNOE) : // Use slice to limit the events based on currentNOE
      allEvents.filter(event => event.location === currentCity).slice(0, currentNOE);
    setEvents(filteredEvents);
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE}/> 
      <EventList events={events} />
    </div>
  );
};

export default App;