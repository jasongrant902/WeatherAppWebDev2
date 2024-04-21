"use client"
import Search from "./search";
import { useState, useEffect } from "react";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=fff8651af82519a977ccff422a8fa4e9&units=metric
        `
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("calgary");
  }, []);

  console.log(weatherData);

  return (
    <div className="text-gray-800 dark:text-white">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading text-6xl font-bold text-black">Loading...</div>
      ) : (
        <div>
          <div className="city-name mb-2.5">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date text-lg font-medium italic">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp text-8xl text-black font-bold text-center">{Math.floor(weatherData?.main?.temp)} °C</div>
          <p className="description text-xl mt-0 mb-5 font-medium text-black">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info flex justify-evenly mt-5 p-0 px-5 items-center text-lg font-bold text-center">
            <div className="subsection flex items-center">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="subsection">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}