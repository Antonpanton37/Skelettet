import React, { useState, useEffect } from 'react';
import './information.css';
import InfoSection from './info'; // lägg till Infosection ifall du vill ha blobbar :) 


function Information () {
    return(
    <>
        <div id="contact" className="section">
          <h1>Information</h1>
          <div className="subheadings">
            <div className="left">
              <div className="subheading">PET-värde</div>
              <p className="subtext">
                Ett mått på fysisk prestation kopplat till syreupptagningsförmåga.
              </p>
            </div>
            <div className="right">
               <div className="subheading">Ansträngningsutlöst kollaps</div>
               <p className="subtext">
               En plötslig kollaps som uppstår vid eller efter fysisk ansträngning.
              </p>
          </div>
      </div>
  </div>

    </>

    );
}
export default Information;