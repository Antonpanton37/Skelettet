import React from 'react';
import './information.css';

function Information() {
  return (
    <div id="contact" className="section">
      <h1>Information</h1>
      <div className="subheadings">
        <div className="subheading-container">
          <h2 className="subheading">PET-värde</h2>
          <p className="subtext">
          PET-skalan är snarlik den allmänna celsiusskalan, men baseras på flera olika meteorologiska
mått så som lufttemperatur, vindhastighet, lufttryck och luftfuktighet. Därmed modellerar
PET olika väderförhållandens effekt på den faktiska temperatur som påverkar kroppens
fysiologiska funktioner. Exempelvis kan värme uppfattas som mer intensiv vid hög luft-
fuktighet än vid torrt väder. Vid Göteborgsvarvet har distans, tid och antal deltagare varit
relativt konstanta över åren. Därmed har PET-värdets variation visat sig vara den starkast
bidragande faktorn till antalet löpare som kollapsar.
          </p>
        </div>

        <div className="subheading-container">
          <h2 className="subheading">Ansträngningsutlöst kollaps</h2>
          <p className="subtext">
          Antalet kollapsande deltagare under ett lopp kan dock inte endast tillskrivas väderförhållan-
den, utan även löparens erfarenhet, inställning och förberedelse spelar in. Under Stockholm
Marathon 2024 behövde en mindre andel löpare ambulansupphämtning, trots högre tempe-
raturer än under Göteborgsvarvet. En förklaring kan vara att halvmaraton lockar fler
amatörlöpare, medan maratonlöpare ofta är mer erfarna och beredda på de fysiska ansträng-
ningarna. Studier visar exempelvis att tävlingslöpare har en bättre förmåga att anpassa
sin hastighet för att justera kroppens energinivå innan kroppstemperaturen blir för hög.
          </p>
        </div>

        <div className="subheading-container">
          <h2 className="subheading">Vad är vårat mål med sprida denna information?</h2>
          <p className="subtext">
          Vårt mål är att öka kunskapen om hur väderförhållanden påverkar fysisk prestation och hälsorisker vid löpning. Genom att analysera samband mellan temperatur, ansträngning och kollapser under lopp kan vi bidra till bättre förberedelse, minskade medicinska incidenter och en säkrare löpupplevelse för alla deltagare.
          </p>
        </div>
      </div>
      {/* <div className="image-container">
      <video autoPlay loop muted className="info-image">
          <source src="/lopningvid.mp4" type="video/mp4" />
        </video>
      </div> */}
    </div>
    
  );
}

export default Information;

