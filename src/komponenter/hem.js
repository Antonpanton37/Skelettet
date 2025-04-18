import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './hem.css'; 

const Home = () => {
  return (
    <div div id="home" className="video-container">
      {/* Bakgrundsvideo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline preload="auto" className="w-full h-auto object-cover pointer-events-none">
          <source src="/Untitled.mp4" type="video/mp4"/>
        </video>
      </div>

      {/* Text och ikon över videon */}
      <div className="content">
        <FontAwesomeIcon icon={faRunning} className="icon" />
        <p>Välkommen till RunWise!</p>
      </div>
    </div>
  );
};

export default Home;
