import React, { useState, useEffect } from 'react';
import './kalk.css';

const RunningCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [location, setLocation] = useState('');
    const [pace, setPace] = useState(5);
    const [result, setResult] = useState(null);
    const [hasResult, setHasResult] = useState(false);
    const [temperature, setTemperature] = useState(null); 
    const [weatherIcon, setWeatherIcon] = useState(null); 


    // Uppdatera slider-fyllning
    useEffect(() => {
        const slider = document.querySelector(".calculator-slider");
        if (slider) {
            const min = slider.min;
            const max = slider.max;
            const percentage = ((pace - min) / (max - min)) * 100;
            slider.style.background = `linear-gradient(to right, black 0%, black ${percentage}%, white ${percentage}%, white 100%)`;
        }
    }, [pace]);

    // När man trycker på Beräkna
    const handleCalculate = async () => {
        const data = {
            age: parseInt(age),
            gender,
            weight: parseFloat(weight),
            location,
            pace: parseFloat(pace),
        };

        try {
            // 1. Skicka till Flask-backend
            const response = await fetch("http://127.0.0.1:5000/calculate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            setResult(responseData.result);
            setHasResult(true);

            // 2. Hämta väder från WeatherAPI
            if (location) {
                const apiKey = '967994137b684f6c886100836252503';
                const weatherResponse = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=sv`
                );
                const weatherData = await weatherResponse.json();

                if (weatherData && weatherData.current) {
                    setTemperature(weatherData.current.temp_c);
                    setWeatherIcon(weatherData.current.condition.icon);
                } else {
                    setTemperature(null);
                }
            }
        } catch (error) {
            console.error("Fel vid beräkning eller hämtning av väder:", error);
        }
    };

    return (
        <div id="calculator" className="section">
            <h1>Kalkylator</h1>
            <p>Här kan du beräkna din löptakt.</p>

            <div className="calculator-container">
                <div className={`calculator-content ${hasResult ? "with-result" : "centered"}`}>
                    {/* Formuläret */}
                    <div className="calculator-box">
                        <h2 className="calculator-title">Running Calculator</h2>

                        <label>Ålder:</label>
                        <input 
                            type="number" 
                            className="calculator-input" 
                            placeholder="Ange din ålder" 
                            onChange={(e) => setAge(e.target.value)} 
                        />

                        <label>Kön:</label>
                        <select 
                            className="calculator-input" 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="">Välj</option>
                            <option value="male">Man</option>
                            <option value="female">Kvinna</option>
                            <option value="other">Annat</option>
                        </select>

                        <label>Vikt (kg):</label>
                        <input 
                            type="number" 
                            className="calculator-input" 
                            placeholder="Ange din vikt" 
                            onChange={(e) => setWeight(e.target.value)}
                        />

                        <label>Plats:</label>
                        <input 
                            type="text" 
                            className="calculator-input" 
                            placeholder="Ange din plats (t.ex. Göteborg)" 
                            onChange={(e) => setLocation(e.target.value)}
                        />

                        <label>Pace (min/km): {pace}</label>
                        <input 
                            type="range" 
                            min="1" 
                            max="17" 
                            step="0.1" 
                            value={pace} 
                            className="calculator-slider" 
                            onChange={(e) => setPace(e.target.value)} 
                        />

                        <button 
                            className="calculator-button"
                            onClick={handleCalculate}
                        >
                            Beräkna
                        </button>
                    </div>

                    {/* Resultat */}
                    {result !== null && (
                        <div className="calculator-result">
                            <h3>Ditt beräknade resultat:</h3>
                            <p><strong>Kaloriförbrukning:</strong> {result.toFixed(1)} kcal</p>

                            {temperature !== null && (
                                <p><strong>Temperatur i {location}:</strong> {temperature}°C{" "}
                                {weatherIcon && <img src={weatherIcon} alt="väder" style={{ width: "32px", verticalAlign: "middle" }} />}
                                </p>
                                
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RunningCalculator;
