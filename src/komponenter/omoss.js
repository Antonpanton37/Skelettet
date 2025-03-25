import React, { useState, useEffect } from 'react';
import './omoss.css';

function Omoss () {
    return(
    <>
        <div id="about-us" className="section">
        <h1>Om oss</h1>
        <p>Vi hjälper löpare att förbättra sin prestation.</p>
      </div>
      
      <div className="image-row">
        <img src="/nils.jpg" alt="Image 1" className="small-image" />
        <img src="/Tilde.jpg" alt="Image 2" className="small-image" />
        <img src="/Nils.jpeg" alt="Image 3" className="small-image" />
        <img src="/tilde.png" alt="Image 3" className="small-image" />
        <video autoPlay loop muted className='small-image'>
          <source src="/nils.mp4.mp4" type="video/mp4" />
        </video>
      </div>
      </>

    );
}
export default Omoss;