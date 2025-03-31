import React, { useState } from 'react';
import './nykalk.css';

const Nykalk = () => {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kg');
  const [bcs, setBcs] = useState(5);
  const [spayed, setSpayed] = useState(true);

  return (
    <div className="kalk-container">
      <h2>Calorie Calculator</h2>
      <div className="switch-buttons">
        <button className="active">Dogs</button>
        <button>Cats</button>
      </div>

      <div className="form-section">
        <label>How much does the pet weigh?</label>
        <div className="weight-input">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <div className="unit-toggle">
            <button
              className={unit === 'lb' ? 'selected' : ''}
              onClick={() => setUnit('lb')}
            >
              Lb
            </button>
            <button
              className={unit === 'kg' ? 'selected' : ''}
              onClick={() => setUnit('kg')}
            >
              Kg
            </button>
          </div>
        </div>

        <label>What is the pet's body condition score?</label>
        <input
          type="range"
          min="1"
          max="9"
          value={bcs}
          onChange={(e) => setBcs(e.target.value)}
          className="bcs-slider"
        />
        <div>BCS: {bcs}</div>

        <label>Is the pet spayed / neutered?</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              checked={spayed}
              onChange={() => setSpayed(true)}
            />
            Spayed / Neutered
          </label>
          <label>
            <input
              type="radio"
              checked={!spayed}
              onChange={() => setSpayed(false)}
            />
            Intact
          </label>
        </div>
      </div>

      <div className="result-section">
        <h3>Resultat</h3>
        <table>
          <tbody>
            <tr>
              <td>Weight</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>Daily Calories</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>New Suggested Feeding</td>
              <td colSpan="2">--</td>
            </tr>
            <tr>
              <td>Daily Treat Allotment</td>
              <td colSpan="2">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Nykalk;
