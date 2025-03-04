import React, { useState, useEffect } from 'react';
import './kalk.css'; // Importera CSS-filen

const RunningCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [location, setLocation] = useState('');
    const [pace, setPace] = useState(5);
    const [calories, setCalories] = useState(null);

    // Uppdatera slider-fyllning vid ändring av pace
    useEffect(() => {
        const slider = document.querySelector(".calculator-slider");
        if (slider) {
            const min = slider.min;
            const max = slider.max;
            const percentage = ((pace - min) / (max - min)) * 100;

            // Uppdatera CSS med inline-style
            slider.style.background = `linear-gradient(to right, black 0%, black ${percentage}%, white ${percentage}%, white 100%)`;
        }
    }, [pace]); // Körs varje gång pace ändras

    const calculateCalories = () => { 
        const totalCalories = 100;
        setCalories(totalCalories);
    };

    return (
        <div className="calculator-container">
            <div className="calculator-content">
                {/* Formulärsektionen */}
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
                        placeholder="Ange din plats" 
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <label>Pace (min/km): {pace}</label>
                    <input 
                        type="range" 
                        min="1" max="17" step="0.1" 
                        value={pace} 
                        className="calculator-slider" 
                        onChange={(e) => setPace(e.target.value)}
                    />

                    <button 
                        className="calculator-button"
                        onClick={calculateCalories}
                    >
                        Beräkna
                    </button>
                </div>

                {/* Resultatsektionen */}
                {calories !== null && (
                    <div className="calculator-result">
                        <h3>Här ska vi skriva våra olika resultat:</h3>
                        <p>{calories.toFixed(1)} kcal</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RunningCalculator;