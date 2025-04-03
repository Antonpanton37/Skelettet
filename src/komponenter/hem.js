import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './hem.css'; 

const Home = () => {
  return (
    <div div id="home" className="video-container">
      {/* Bakgrundsvideo */}
      <div className="video-background">
        <video autoPlay loop muted playsinline class="pointer-events-none w-full h-auto object-cover" controls="false">
          <source src="/Untitled.mp4" type="video/mp4"/>
        </video>
      </div>

      {/* Text och ikon över videon */}
      <div className="content">
        <FontAwesomeIcon icon={faRunning} className="icon" />
        <p>Välkommen till PacePal!</p>
      </div>
    </div>
  );
};

export default Home;
