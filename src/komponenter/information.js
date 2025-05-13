import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import './information.css'; // Behåll om du har generell stil här

const slides = [
  {
    title: '❗️OBS❗️',
    content: `PET-värdet och de råd som presenteras på webbplatsen är baserade på vetenskapliga källor, men är endast rekommendationer och utgör ingen garanti för din säkerhet. Vid hälsobesvär i samband med löpning rekommenderar vi att du kontaktar läkare.`
  },
  {
    title: 'Vätska',
    content: `Det är mycket viktigt att fylla på kroppens vattennivåer både före, under och efter löpning, särskilt när det är varmt ute och du svettas mycket! Drick hellre mindre mängder ofta än massor på en gång.`
  },
  {
    title: 'Salter',
    content: "Vid hård ansträngning, särskilt i värme, är det lika viktigt att fylla på med salt som med vatten. Salter hjälper kroppen att ta upp och behålla vätska bättre. Du kan exempelvis äta salta snacks eller använda elektrolytlösningar (ex. Resorb) i dricksvattnet."
  },
  {
    title: 'Acklimatisering',
    content: `Genom att gradvis vänja din kropp vid fysisk ansträngning i värme kan du minska riskerna för hälsobesvär och lära dig hur just din kropp reagerar på värme. Ex. kan du utföra löpträning i varm miljö utomhus, eller inomhus i varm lokal eller med varmare kläder. Även passiv exponering genom ex. bastu kan ha viss effekt.`
  },
  {
    title: 'Klädsel',
    content: `När det är varmt ute bör du välja kläder som tillåter svett att avdunsta - alltså plagg som täcker liten yta och i material som andas. Du måste samtidigt skydda dig mot solens strålning, genom ex. solkräm eller tunna men täckande plagg`
  },
  {
    title: 'Sjukdom',
    content: `Att träna när du är eller precis har varit sjuk är en dålig idé - sjukdom har signifikant inverkan på kroppens förmåga att reglera vätske- och värmenivåer. Dessutom innebär det ökad risk för hjärtmuskelinflammation.`
  },
  {
    title: 'Sänk farten',
    content: `Om du löptränar i varmt väder är bland det mest effektiva du kan göra att sänka farten - det minskar signifikant risken för värmerelaterade åkommor som ex. ansträngningsutlöst kollaps.`
  }
];

export default function InformationCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, content } = slides[index];

  return (
    <div id="contact" className="section bg-blue-100 rounded-3xl px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6"> Vad är PET?</h1>
  


      <p className="pet-description">
      Physiological Equivalent Temperature (PET) är ett biometerologiskt index som beskriver hur kroppen upplever temperatur baserat på väderförhållanden. Utöver luftens temperatur inverkar omständigheter som luftfuktighet, vindhastighet och solens strålning på hur intensivt värme upplevs. PET på denna webbplats föreställer den lufttemperatur inomhus (utan vind och solstrålning), som motsvarar kroppens värmebalans vid löpning i värme.
      

      </p>

      <p className="pet-description">
      
      Exempelvis: PET 27°C motsvarar för din kropp samma upplevelse som att sitta i ett rum, utan vind och strålning, där lufttemperaturen är 27°C.

      </p>

      <p className="pet-description">
      
      PET har visat sig korrelera med hur många som drabbas av akuta sjukdomstillstånd under stora löptävlingar som Göteborgsvarvet. Ju högre temperatur din kropp upplever, desto större är risken att du drabbas av tillstånd som ansträngningsutlöst kollaps, värmeslag eller muskelkramp.

      </p>


      <h1 className="text-2xl font-bold text-center mb-6">Generella råd</h1>
      <div className="karusell">
        <h2 className="titel-text">{title}</h2>
        <p className="content-text">{content}</p>


      </div>

      <div className=" button-row flex justify-center gap-6 items-center">
            <button
        onClick={prev}
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow transition"
      >
        <FiArrowLeft size={24} />
      </button>
      <button
        onClick={next}
        className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow transition"
      >
        <FiArrowRight size={24} />
      </button>
      </div>
    </div>
  );
}
