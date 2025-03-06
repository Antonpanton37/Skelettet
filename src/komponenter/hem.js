import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import './hem.css';

const Home = () => {
  return (
    <div className="video-container">
      {/* Bakgrundsvideo */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/untitled.mp4" type="video/mp4" />
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
