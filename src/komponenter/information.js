import React, { useState } from 'react';
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
    <div id="contact" className="section bg-blue-100 rounded-3xl px-6 py-10 text-center max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Generella råd</h1>

      <p className="max-w-xl mb-6 text-base text-gray-700">
        Physiological Equivalent Temperature (PET) är ett biometerologiskt index som beskriver hur kroppen upplever temperatur baserat på väderförhållanden. Utöver luftens temperatur inverkar omständigheter som luftfuktighet, vindhastighet och molnighet på hur intensivt värme upplevs. PET på denna webbplats föreställer den lufttemperatur inomhus (utan vind och solstrålning), som motsvarar kroppens värmebalans vid löpning i värme.
        Exempelvis: PET 27°C motsvarar upplevelsen av att sitta i ett rum, utan vind och strålning, där lufttemperaturen är 27°C.
      </p>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-6 text-base leading-relaxed">{content}</p>

      <div className="flex justify-center gap-6 items-center">
        <button
          onClick={prev}
          className="text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          aria-label="Föregående"
        >
          ←
        </button>
        <button
          onClick={next}
          className="text-2xl px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          aria-label="Nästa"
        >
          →
        </button>
      </div>
    </div>
  );
}
