import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import './information.css'; // Behåll om du har generell stil här

const slides = [
  {
    title: 'PET-värde',
    content: `PET-skalan är snarlik den allmänna celsiusskalan, men baseras på flera olika meteorologiska mått som lufttemperatur, vindhastighet, lufttryck och luftfuktighet. Därmed modellerar PET olika väderförhållandens effekt på den faktiska temperatur som påverkar kroppens fysiologiska funktioner.`
  },
  {
    title: 'Ansträngningsutlöst kollaps',
    content: `Antalet kollapsande deltagare under ett lopp kan dock inte endast tillskrivas väderförhållanden, utan även löparens erfarenhet, inställning och förberedelse spelar in. Studier visar exempelvis att tävlingslöpare har en bättre förmåga att anpassa sin hastighet för att justera kroppens värmebalans.`
  },
  {
    title: 'Syftet med informationen',
    content: `Vårt mål är att öka kunskapen om hur väderförhållanden påverkar fysisk prestation och hälsorisker vid löpning, och därmed minska medicinska incidenter samt förbättra upplevelsen för alla deltagare.`
  }
];

export default function InformationCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, content } = slides[index];

  return (
    <div id="contact" className="section bg-blue-100 rounded-3xl px-6 py-10 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Generella råd</h1>
      <h2 className="text-2xl font-bold text-center mb-6"> Vad är PET?</h2>


      <p className="pet-description">
        Physiological Equivalent Temperature (PET) är ett biometerologiskt index som beskriver hur kroppen upplever temperatur baserat på väderförhållanden. Utöver luftens temperatur inverkar omständigheter som luftfuktighet, vindhastighet och molnighet på hur intensivt värme upplevs. PET på denna webbplats föreställer den lufttemperatur inomhus (utan vind och solstrålning), som motsvarar kroppens värmebalans vid löpning i värme.
        Exempelvis: PET 27°C motsvarar upplevelsen av att sitta i ett rum, utan vind och strålning, där lufttemperaturen är 27°C.
      </p>

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
