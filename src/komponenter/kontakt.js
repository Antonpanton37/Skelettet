import React, { useState, useEffect } from 'react';
import './kontakt.css';
import Weather from "./väder";

function Kontakt () {
    return(
    <>
        <div id="contact" className="section">
        <h1>Kontakt</h1>
        <p>Kontakta oss för mer information.</p>
        
        <Weather/>
      </div>
    </>

    );
}
export default Kontakt;