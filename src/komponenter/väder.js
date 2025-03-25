'use client'; // Endast om du använder Next.js App Router

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Stockholm');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'DIN_API_NYCKEL'; // Ersätt med din egen API-nyckel

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`
        );
        setWeatherData(data);
      } catch (err) {
        setError('Kunde inte hämta väderdata');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h1>Väder i {city}</h1>

      <input
        type="text"
        placeholder="Skriv en stad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
      />

      {loading && <p>Laddar väderdata...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData ? (
        <div>
          <p><strong>Temperatur:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Väder:</strong> {weatherData.weather?.[0]?.description ?? 'Ingen info'}</p>
          <p><strong>Vind:</strong> {weatherData.wind.speed} m/s</p>
          <p><strong>Luftfuktighet:</strong> {weatherData.main.humidity}%</p>
        </div>
      ) : (
        !loading && !error && <p>Ingen väderdata tillgänglig.</p>
      )}
    </div>
  );
};

export default Weather;
