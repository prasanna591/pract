import React, { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "11dc709d8bc2105c392cd91fd5ee7625";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const data = await response.json();

      if (data.cod === "404") {
        setError("City not found!");
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (error) {
      setError("Failed to fetch weather. Check your API key or try again!");
    }
  };

  return (
    <div className="weather-container">
      <h2>🌍 Weather App</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>🌤️ Condition: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
