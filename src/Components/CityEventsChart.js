// src/components/CityEventsChart.js

import { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length;
      const city = location.split(', ')[0]; // Assuming the city name is before the comma
      return { city, count };
    });
    setData(newData);
  }, [allLocations, events]); // Depend on allLocations and events instead of data

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" />
        <YAxis type="number" dataKey="count" name="Number of events" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="City Events" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default CityEventsChart;
