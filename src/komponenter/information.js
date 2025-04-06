import React, { useState, useEffect } from 'react';
import './information.css';

function Information() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Kolla om det är mobil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // kör vid mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (index) => {
    if (!isMobile) return;
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const data = [
    {
      title: 'PET-värde',
      content: `PET-skalan är snarlik den allmänna celsiusskalan, men baseras på flera olika meteorologiska
mått så som lufttemperatur, vindhastighet, lufttryck och luftfuktighet. Därmed modellerar
PET olika väderförhållandens effekt på den faktiska temperatur som påverkar kroppens
fysiologiska funktioner. Exempelvis kan värme uppfattas som mer intensiv vid hög luft-
fuktighet än vid torrt väder. Vid Göteborgsvarvet har distans, tid och antal deltagare varit
relativt konstanta över åren. Därmed har PET-värdets variation visat sig vara den starkast
bidragande faktorn till antalet löpare som kollapsar.`
    },
    {
      title: 'Ansträngningsutlöst kollaps',
      content: `Antalet kollapsande deltagare under ett lopp kan dock inte endast tillskrivas väderförhållan-
den, utan även löparens erfarenhet, inställning och förberedelse spelar in. Under Stockholm
Marathon 2024 behövde en mindre andel löpare ambulansupphämtning, trots högre tempe-
raturer än under Göteborgsvarvet. En förklaring kan vara att halvmaraton lockar fler
amatörlöpare, medan maratonlöpare ofta är mer erfarna och beredda på de fysiska ansträng-
ningarna. Studier visar exempelvis att tävlingslöpare har en bättre förmåga att anpassa
sin hastighet för att justera kroppens energinivå innan kroppstemperaturen blir för hög.`
    },
    {
      title: 'Vad är vårat mål med sprida denna information?',
      content: `Vårt mål är att öka kunskapen om hur väderförhållanden påverkar fysisk prestation och hälsorisker vid löpning. Genom att analysera samband mellan temperatur, ansträngning och kollapser under lopp kan vi bidra till bättre förberedelse, minskade medicinska incidenter och en säkrare löpupplevelse för alla deltagare.`
    }
  ];

  return (
    <div id="contact" className="section">
      <h1>Information</h1>
      <div className="subheadings">
        {data.map((item, index) => (
          <div
            key={index}
            className={`subheading-container ${isMobile ? 'clickable' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <h2 className="subheading">{item.title}</h2>

            {isMobile && (
              <p className="read-more-hint">
                {activeIndex === index ? '' : 'Klicka här för att läsa mer...'}
              </p>
            )}

            <p className={`subtext ${activeIndex === index || !isMobile ? 'visible' : 'hidden'}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
