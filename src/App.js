// src/App.js

import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './Components/CitySearch';
import EventList from './Components/EventList';
import NumberOfEvents from './Components/NumberOfEvents';
import { InfoAlert, ErrorAlert, WarningAlert } from './Components/Alert';
import CityEventsChart from './Components/CityEventsChart'

import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("The app is currently offline")
    }
    fetchData();
  }, [currentCity, currentNOE]);

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
      <h1>Meet App</h1>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents currentNOE={currentNOE} setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} /> 
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events} />
    </div>
  );
};

export default App;