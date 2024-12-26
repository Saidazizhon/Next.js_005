import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div className="text-center text-white">
      <h1 className="text-6xl">{weather.temp_c}°C</h1>
      <p className="text-xl">{weather.condition.text}</p>
      <p>Feels Like: {weather.feelslike_c}°C</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
};

export default CurrentWeather;
