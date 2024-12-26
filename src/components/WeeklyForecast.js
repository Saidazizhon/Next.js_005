import React from "react";

const WeeklyForecast = ({ forecast }) => {
  return (
    <div className="mt-32">
      <h2 className="text-white text-2xl mb-10 text-center">Daily Forecast</h2>
    <div className="flex ml-[420px] space-x-4 overflow-x-auto text-white">
      {forecast.map((day, index) => (
        <div key={index} className="text-center">
          <p>{day.date}</p>
          <img
            src={day.day.condition.icon}
            alt={day.day.condition.text}
            className="mx-auto"
          />
          <p>{day.day.avgtemp_c}°C</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WeeklyForecast;
