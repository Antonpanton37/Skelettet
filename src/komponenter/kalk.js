import React, { useState, useEffect } from 'react';
import './kalk.css'; // Importera CSS-filen

const RunningCalculator = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');
    const [location, setLocation] = useState('');
    const [pace, setPace] = useState(5);
    const [result, setResult] = useState(null); //läggs till så att resulat kan skickas 
    const [hasResult, setHasResult] = useState(false); // läggs till så att vi får rutan först i mitten och sen till höger

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

    //Skickar data till Flask-servern och tar emot beräkningsresultatet. Skickar till app.py i backend, som sedan räknar ut 
    const handleCalculate = async () => {
        const data = {
            age: parseInt(age),
            gender: gender,
            weight: parseFloat(weight),
            //location: location,
            pace: parseFloat(pace),
        };
// I fetch ska vi byta ut adressen till den publika adressen 
//I produktion kan vi hosta dem tillsammans så att Flask och React delar samma domän.
        try {
            const response = await fetch("http://127.0.0.1:5000/calculate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            setResult(responseData.result); // Uppdaterar resultatet på skärmen
            setHasResult(true); // 💥 Uppdatera layout efter resultat
        } catch (error) {
            console.error("Fel vid beräkning:", error);
        }
    };

    return (
        <div id="calculator" className="section">
            <h1>Kalkylator</h1>
            <p>Här kan du beräkna din löptakt.</p>

            <div className="calculator-container">
                <div className={`calculator-content ${hasResult ? "with-result" : "centered"}`}>
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
                            onClick={handleCalculate} // Ändrat till Flask-funktion
                        >
                            Beräkna
                        </button>
                    </div>

                    {/* Resultatsektionen */}
                    {result !== null && (
                        <div className="calculator-result">
                            <h3>Ditt beräknade resultat:</h3>
                            <p>{result.toFixed(1)} kcal</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RunningCalculator;
