"use client";

import React, { useState, useEffect } from "react";
import CurrentWeather from "../components/CurrentWeather";
import WeeklyForecast from "../components/WeeklyForecast";

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/forecast.json?key=c3a6dc4386cc49e7ba0155411242212&q=Tashkent&days=7"
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-gradient-to-b from-blue-900 to-blue-600 min-h-screen p-4">
      <header className="text-center text-white py-4">
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
      </header>
      <main>
        <CurrentWeather weather={weatherData.current} />

        <WeeklyForecast forecast={weatherData.forecast.forecastday} />
      </main>
    </div>
  );
}
