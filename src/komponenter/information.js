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
              <h2 className="subheading">PET-värde</h2>
              <p className="subtext">
                Ett mått på fysisk prestation kopplat till syreupptagningsförmåga.
                Hundar har i tusentals år varit människans trogna följeslagare. Från att ha varit vilda rovdjur till att bli våra sällskapsdjur, har hundar utvecklats till att spela många olika roller i människans liv. De fungerar inte bara som familjemedlemmar, utan också som arbetande djur – exempelvis som vakthundar, ledarhundar, räddningshundar och terapihundar. Alla tamhundar härstammar från vargen, och genom selektiv avel har vi fått fram de hundraser vi känner till idag. Det finns över 300 olika raser, alla med olika egenskaper, temperament och utseende. Från den lilla chihuahuan till den stora grand danois – varje ras har sitt unika syfte och sin historia.
              </p>
            </div>
            <div className="right">
              <h2 className="subheading">Ansträngningsutlöst kollaps</h2>
              <p className="subtext">
              En plötslig kollaps som uppstår vid eller efter fysisk ansträngning.
              Alla tamhundar härstammar från vargen, och genom selektiv avel har vi fått fram de hundraser vi känner till idag. Det finns över 300 olika raser, alla med olika egenskaper, temperament och utseende. Från den lilla chihuahuan till den stora grand danois – varje ras har sitt unika syfte och sin historia. Alla tamhundar härstammar från vargen, och genom selektiv avel har vi fått fram de hundraser vi känner till idag. Det finns över 300 olika raser, alla med olika egenskaper, temperament och utseende. Från den lilla chihuahuan till den stora grand danois – varje ras har sitt unika syfte och sin historia.
            </p>
          </div>
      </div>
  </div>

    </>

    );
}
export default Information;