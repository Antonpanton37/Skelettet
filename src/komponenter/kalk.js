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
	const [temp, setTemp] = useState(null);      // ✅ Lägg till denna
	const [time, setTime] = useState(null);
	const [forecast, setForecast] = useState([]);
	const [advice, setAdvice] = useState('');
	const [waterIntake, setWaterIntake] = useState(null);
	const [loading, setLoading] = useState(false);
	const [icon, setIcon] = useState(null);



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
		const start = performance.now(); 
		try {
			const response = await fetch("https://backend-1-s6ox.onrender.com/calculate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
	
			const responseData = await response.json();
			const end = performance.now();

			console.log(`📡 Total svarstid: ${(end - start).toFixed(2)} ms`);
			// Hämta värden från backend
			setResult(responseData.result);
			setTemp(responseData.temp);
			setTime(responseData.time);
			setIcon(responseData.icon);
	
			// Om du returnerar max_temp också:
			if (responseData.max_temp) {
				setForecast([{
					time: responseData.max_temp.time?.split(' ')[1] || '',
					temp: responseData.max_temp.temp,
					icon: responseData.max_temp.icon || ''
				}]);
			} else {
				setForecast([]);
			}
	
			setHasResult(true);
	
			// Vätskeintag
			if (weight && !isNaN(parseFloat(weight))) {
				const w = parseFloat(weight);
				const minWater = (0.05 * w).toFixed(1); 
				const maxWater = (0.07 * w).toFixed(1);
				setWaterIntake({ min: minWater, max: maxWater });
			} else {
				console.warn("Vikten är ogiltig:", weight);
			}
	
			// Råd baserat på PET
			if (responseData.result <= 21) {
				setAdvice("🏃‍♂️‍➡️PET är lågt och risken för kollaps är därmed liten - spring som vanligt.");
			} else if (responseData.result >= 22 && responseData.result <= 28) {
				setAdvice("🏃‍♂️‍➡️PET är medelhögt och medför viss risk för kollaps - spring långsammare än vanligt.");
			} else {
				setAdvice("🏃‍♂️‍➡️PET är högt och risken för kollaps är stor - spring långsamt.");
			}
		} catch (error) {
			console.error("Fel vid beräkning:", error);
		} finally {
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
			<h1>Beräkna ditt PET-värde</h1>
			<p className="calculator-subtitle"><em>- temperaturen din kropp upplever under rådande väderförhållanden</em></p>

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
					
						</select>

						<label>Vikt (kg):</label>
						<input
							type="number"
							className="calculator-input"
							placeholder="Ange din vikt"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
						<label>Längd (cm):</label>
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
						<h3>Dagens högsta PET:</h3>
						{loading && 
							<div className="spinner-container">
								<div className="spinner"></div>
							</div>
							}

						
						{result !== null ? (
							<>	
							
							{result >= 10 ? (
      							<p><p></p> {result.toFixed(1)}°C </p>
   								 ) : (
      							<p><em>Lufttemperaturen är för låg för att ge ett väsentligt PET</em></p>
)}
									<p>
										<p> inträffar kl kl {time}{" "} i {location}, då lufttemperaturen är {temp}°C:</p> 
										{icon && (
											<img
												src={icon}
												alt="väder"
												style={{ width: "32px", verticalAlign: "middle" }}
											/>
										)}
									</p>
								
							</>
						) : (
							<p>-</p>
						)}
			

                        {/*Råd*/}
						<div className="calculator-advice">
							<p>{advice || "Råd kommer att visas här efter beräkning."}</p>
						</div>

						{waterIntake && (
  							<p><>💧 Rekommenderat vätskeintag innan löptur:</> {waterIntake.min}–{waterIntake.max} dl vatten.</p>
								)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default RunningCalculator;
