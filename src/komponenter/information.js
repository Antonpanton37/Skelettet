import React, { useState, useEffect } from 'react';
import './information.css';


const slides = [
  {
    title: 'PET-värde',
    text: 'PET-skalan är snarlik den allmänna celsiusskalan, men baseras på flera olika meteorologiska mått som lufttemperatur, vindhastighet, lufttryck och luftfuktighet. Därmed modellerar PET olika väderförhållandens effekt på den faktiska temperatur som påverkar kroppens fysiologiska funktioner.'
  },
  {
    title: 'Ansträngningsutlöst kollaps',
    text: 'Antalet kollapsande deltagare under ett lopp kan inte endast tillskrivas väderförhållanden, utan även löparens erfarenhet, inställning och förberedelse spelar in. Studier visar att tävlingslöpare har bättre förmåga att anpassa sin hastighet för att justera kroppens värmebalans.'
  },
  {
    title: 'Syftet med informationen',
    text: 'Vårt mål är att öka kunskapen om hur väderförhållanden påverkar fysisk prestation och hälsorisker vid löpning, och därmed minska medicinska incidenter samt förbättra upplevelsen för alla deltagare.'
  }
];

export default function InfoCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const { title, text } = slides[index];

  return (
    <div id="contact" className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm sm:text-base mb-4">{text}</p>
      <div className="flex justify-between">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Föregående
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Nästa
        </button>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        {index + 1} / {slides.length}
      </div>
    </div>
  );
}
