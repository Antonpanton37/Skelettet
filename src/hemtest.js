// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return ( 
    <div className="Home">
      <video className="background-video" autoPlay loop muted>
        <source src="/lopningvid.mp4" type="video/mp4" />
      </video>

      <div className="overlay-text">
        <h1>Cool Strides</h1>
        <h2>Makes running safe</h2>
      </div>

      <div className="video-tabs">
        <button onClick={() => navigate('/page1')}>RunningCalculator</button>
        <button onClick={() => navigate('/page2')}>Weather Information</button>
        <button onClick={() => navigate('/page3')}>About Us</button>
      </div>
    </div>
  );
}

export default Home;
