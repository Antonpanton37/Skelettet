import React, { useState, useEffect } from 'react';
import './kalk.css';

const RunningCalculator = () => {
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [weight, setWeight] = useState('');
	const [location, setLocation] = useState('');
	const [pace, setPace] = useState('');
	const [result, setResult] = useState(null);
	const [hasResult, setHasResult] = useState(false);
	const [forecast, setForecast] = useState([]);
	const [advice, setAdvice] = useState('');
	const [waterIntake, setWaterIntake] = useState(null);
	const [loading, setLoading] = useState(false);



    {/*Hämtar från pythonkoden*/}
	const handleCalculate = async () => {
		
	
		const data = {
			age: parseInt(age),
			gender,
			weight: parseFloat(weight),
			location,
			pace: parseFloat(pace),
		};
		setLoading(true);
		try {
			const response = await fetch("https://backend-1-s6ox.onrender.com/calculate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const responseData = await response.json();
			setResult(responseData.result);
			setHasResult(true);
			if (weight && !isNaN(parseFloat(weight))) {
                const w = parseFloat(weight);
                const minWater = (0.5 * w);
                const maxWater = (0.7 * w);
                const minGlas = (minWater).toFixed(1);
                const maxGlas = (maxWater).toFixed(1);
                setWaterIntake({ min: minGlas, max: maxGlas });
            } else {
                console.warn("Vikten är ogiltig:", weight);
            }

			if (responseData.result < 22) {
				setAdvice("PET är lågt och risken för kollaps är därmed liten - spring som vanligt.");
			} else if (responseData.result >= 22 && responseData.result <= 28) {
				setAdvice("PET är medelhögt och medför viss risk för kollaps - spring långsammare än vanligt.");
			} else {
				setAdvice("PET är högt och risken för kollaps är stor - spring långsamt.");
			}
			{waterIntake && (
				<p><strong>💧 Rekommenderat vätskeintag:</strong> Drick {waterIntake.min}–{waterIntake.max} dl vatten innan din löptur.</p>
			  )}
			  
			  

			  
            {/*API-KEY*/}
			if (location) {
				const apiKey = '967994137b684f6c886100836252503';
				const weatherResponse = await fetch(
					`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&lang=sv&days=1`
				);
				const weatherData = await weatherResponse.json();

				if (weatherData && weatherData.forecast) {
					const forecastHours = weatherData.forecast.forecastday[0].hour;

					const maxTempHour = forecastHours.reduce((max, hour) =>
						hour.temp_c > max.temp_c ? hour : max
					, forecastHours[0]);

					setForecast([{
						time: maxTempHour.time.split(' ')[1],
						temp: maxTempHour.temp_c,
						icon: maxTempHour.condition.icon
					}]);
				} else {
					setForecast([]);
				}
			}
		} catch (error) {
			console.error("Fel vid beräkning eller hämtning av väder:", error);
		}finally {
			setLoading(false);
		}
	};


	// Hanterar både Enter och knapptryck
	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleCalculate();
	};

	return (
		<div id="calculator" className="section">
			<h1>Vilken temperatur upplever din kropp från de rådande väderförhållandena?</h1>
			<p className="calculator-subtitle">Här kan du beräkna ditt PET-värde och få personliga råd.</p>

			<div className="calculator-container">
				<div className="calculator-content">
					<form className="calculator-box" onSubmit={handleSubmit}>
						<h2 className="calculator-title">PET-kalkylator</h2>

						<label>Ålder:</label>
						<input
							type="number"
							className="calculator-input"
							placeholder="Ange din ålder"
							value={age}
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
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
						<label>Längd (m):</label>
						<input
							type="number"
							className="calculator-input"
							placeholder="Ange din längd"
							value={pace}
							step={0.01}
							onChange={(e) => setPace(e.target.value)}
						/>

						<label>Plats:</label>
						<input
							type="text"
							className="calculator-input"
							placeholder="Ange din plats (t.ex. Göteborg)"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>



						<button type="submit" className="calculator-button">
							Beräkna
						</button>
					</form>
                    {/*Resultat*/}
					<div className="calculator-result">
						<h3>Ditt beräknade resultat:</h3>
						{loading && 
							<div className="spinner-container">
								<div className="spinner"></div>
							</div>
							}

						
						{result !== null ? (
							<>	
							<strong>Dagens högsta värden presenteras:</strong>
								<p><p>PET-temperatur:</p> {result.toFixed(1)}°C </p>
								{forecast.length > 0 && (
									<p>
										<p>Lufttemperatur i {location}:</p> {forecast[0].temp}°C kl {forecast[0].time}{" "}
										{forecast[0].icon && (
											<img
												src={forecast[0].icon}
												alt="väder"
												style={{ width: "32px", verticalAlign: "middle" }}
											/>
										)}
									</p>
								)}
							</>
						) : (
							<p>-</p>
						)}
			

                        {/*Råd*/}
						<div className="calculator-advice">
							<p>{advice || "Råd kommer att visas här efter beräkning."}</p>
						</div>

						{waterIntake && (
  							<p><strong>💧 Rekommenderat vätskeintag innan löptur:</strong> {waterIntake.min}–{waterIntake.max} glas vatten.</p>
								)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RunningCalculator;
