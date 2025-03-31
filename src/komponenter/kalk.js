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
	const [forecast, setForecast] = useState([]);
	const [advice, setAdvice] = useState('');

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
			const response = await fetch("https://backend-1-s6ox.onrender.com/calculate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const responseData = await response.json();
			setResult(responseData.result);
			setHasResult(true);

			// 2. Sätt råd baserat på PET
			if (responseData.result < 10) {
				setAdvice("Det är svalt ute – klä dig varmt när du springer.");
			} else if (responseData.result >= 10 && responseData.result <= 18) {
				setAdvice("Perfekt temperatur för löpning!");
			} else {
				setAdvice("Det är varmt – se till att dricka ordentligt och undvik att springa mitt på dagen.");
			}

			// 3. Hämta väder från WeatherAPI
			if (location) {
				const apiKey = '967994137b684f6c886100836252503';
				const weatherResponse = await fetch(
					`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&lang=sv&days=1`
				);
				const weatherData = await weatherResponse.json();

				if (weatherData && weatherData.forecast) {
					// Hämta alla timmar för dagen
					const forecastHours = weatherData.forecast.forecastday[0].hour;

					// Hitta den högsta temperaturen och när den inträffar
					const maxTempHour = forecastHours.reduce((max, hour) =>
						hour.temp_c > max.temp_c ? hour : max
					, forecastHours[0]);

					// Sätt forecast med max temp och tidpunkt
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
		}
	};

	return (
		<div id="calculator" className="section">
			<h1>Kalkylator</h1>
			<p>Här kan du beräkna ditt PET-värde och få tillhörande råd.</p>

			<div className="calculator-container">
				<div className="calculator-content">
					{/* Formulär */}
					<div className="calculator-box">
						<h2 className="calculator-title">PET Calculator</h2>

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
					<div className="calculator-result">
						<h3>Ditt beräknade resultat:</h3>
						{result !== null ? (
							<>
								<p><strong>PET-temperatur:</strong> {result.toFixed(1)}</p>
								{forecast.length > 0 && (
									<p>
										<strong>Högsta temp i {location}:</strong> {forecast[0].temp}°C kl {forecast[0].time}{" "}
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

						{/* Råd */}
						<div className="calculator-advice">
							<p>{advice || "Råd kommer att visas här efter beräkning."}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RunningCalculator;
