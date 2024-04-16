// src/components/EventGenresChart.js

import { useState, useEffect, useMemo } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";

const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const processData = useMemo(() => genres.map((genre) => {
    const filteredEvents = events.filter(event => event.summary.includes(genre));
    return { name: genre, value: filteredEvents.length };
  }), [events]);

  useEffect(() => {
    setData(processData);
  }, [processData]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8428FF"];

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
  }) => {
    if (!percent) return null;
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const label = `${(percent * 100).toFixed(0)}%`;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {label}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
          outerRadius={120}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};

EventGenresChart.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventGenresChart;
