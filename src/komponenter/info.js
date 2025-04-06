import React from "react";
import{ useState } from "react";
import "./info.css";

const InfoBox = ({ title, shortText, longText }) => {
  const [expanded, setExpanded] = useState(false);

  return ( 
    <div
      className={`infobox ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h3>{title}</h3>
      <p>{expanded ? longText : shortText}</p>
    </div>
  );
};

export default function InfoSection() {
  return (
    <div className="infobox-container">
      <InfoBox title="PET-värde" shortText="Kort beskrivning..." longText="PET-skalan är snarlik den allmänna celsiusskalan, men baseras på flera olika meteorologiska mått så som lufttemperatur, vindhastighet, lufttryck och luftfuktighet. Därmed modellerar PET olika väderförhållandens effekt på den faktiska temperatur som påverkar kroppens fysiologiska funktioner. Exempelvis kan värme uppfattas som mer intensiv vid hög luft- fuktighet än vid torrt väder. Vid Göteborgsvarvet har distans, tid och antal deltagare varit relativt konstanta över åren. Därmed har PET-värdets variation visat sig vara den starkast bidragande faktorn till antalet löpare som kollapsar." />
      <InfoBox title="Ansträngningsutförd kollaps" shortText="Kort beskrivning..." longText="Antalet kollapsande deltagare under ett lopp kan dock inte endast tillskrivas väderförhållan- den, utan även löparens erfarenhet, inställning och förberedelse spelar in. Under Stockholm Marathon 2024 behövde en mindre andel löpare ambulansupphämtning, trots högre tempe- raturer än under Göteborgsvarvet. En förklaring kan vara att halvmaraton lockar fler amatörlöpare, medan maratonlöpare ofta är mer erfarna och beredda på de fysiska ansträng- ningarna. Studier visar exempelvis att tävlingslöpare har en bättre förmåga att anpassa sin hastighet för att justera kroppens energinivå innan kroppstemperaturen blir för hög." />
      <InfoBox title="Vad är vårat mål med sprida denna information?" shortText="Kort beskrivning..." longText="Vårt mål är att öka kunskapen om hur väderförhållanden påverkar fysisk prestation och hälsorisker vid löpning. Genom att analysera samband mellan temperatur, ansträngning och kollapser under lopp kan vi bidra till bättre förberedelse, minskade medicinska incidenter och en säkrare löpupplevelse för alla deltagare." />

    </div>
  );
}

//       <InfoBox title="Hejsansvejsan" shortText="Kort beskrivning..." longText="Längre text om Hejsansvejsan..." />
// <InfoBox title="Här ska vi ha något mer" shortText="Kort beskrivning..." longText="Längre text om något mer..." />