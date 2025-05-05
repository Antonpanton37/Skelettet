import React from 'react';
import './omoss.css';

function Omoss() {
  return (
    <>
      <div id='about-us' className="about-container">
        <div className="about-text">
          <h1>Om oss</h1>
          <p>
          Vi är sex studenter vid Chalmers tekniska högskola som, inom ramen för vårt kandidatarbete, har utvecklat denna webbplats med fokus på säker och hållbar löpning i varmare väder.
          </p>
          <p>Arbetet grundar sig i vår gemensamma passion för hälsa och rörelse, och idén tog form i samarbete med en läkare, specialist inom akutsjukvård. Genom hans insikter blev det tydligt att många löpare underskattar riskerna som höga temperaturer kan medföra.

          </p>
          <p>Vårt mål är att tillhandahålla relevant, lättillgänglig och forskningsbaserad information som hjälper löpare att fatta informerade beslut och minska risken för sjukdomstillstånd i varmare vädertemperaturer.
          </p>
        </div>
        <div className="about-image">
          <img src="/nils.jpg" alt="Teamet" />
        </div>
      </div>

      <div id='bilder' className="image-row">
        <img src="/DSC03021.jpg" alt="Image 1" className="small-image" />
        <img src="/Tilde.jpg" alt="Image 2" className="small-image" />
        <img src="/löpa.jpg" alt="Image 3" className="small-image" />
        <img src="/tilde.png" alt="Image 4" className="small-image" />
        <video autoPlay loop muted className="small-image">
          <source src="/nils.mp4.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Omoss;
