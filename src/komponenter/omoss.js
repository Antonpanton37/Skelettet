import React from 'react';
import './omoss.css';

function Omoss() {
  return (
    <>
      <div id='about-us' className="about-container">
        <div className="about-text">
          <h1>Om oss</h1>
          <p>
            Vi är 6 stycken elever som tillsammans har tagit fram bla bla bla och det visas här på hemsidan. 
          </p>
        </div>
        <div className="about-image">
          <img src="/nils.jpg" alt="Teamet" />
        </div>
      </div>

      <div id='bilder' className="image-row">
        <img src="/nils.jpg" alt="Image 1" className="small-image" />
        <img src="/Tilde.jpg" alt="Image 2" className="small-image" />
        <img src="/Nils.jpeg" alt="Image 3" className="small-image" />
        <img src="/tilde.png" alt="Image 4" className="small-image" />
        <video autoPlay loop muted className="small-image">
          <source src="/nils.mp4.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Omoss;
