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
      <InfoBox title="PET-värde" shortText="Kort beskrivning..." longText="Längre text om PET-värde...Katter är självständiga och nyfikna djur som har varit människans sällskap i tusentals år. De är kända för sin smidighet, sitt lekfulla beteende och sin förmåga att spinna när de är nöjda. Katter trivs både som inomhus- och utomhusdjur och anpassar sig lätt till olika miljöer. Med sin charm och sitt egenrådiga sätt vinner de snabbt sina ägares hjärtan." />
      <InfoBox title="Ansträngningsutförd kollaps" shortText="Kort beskrivning..." longText="Längre text om ansträngningsutförd kollaps...Hundar är lojala och intelligenta djur som har varit människans följeslagare i tusentals år. De finns i många olika raser, från små chihuahuor till stora grand danois, och används för allt från sällskap till arbete inom polis, räddningstjänst och terapi. Hundar är kända för sin starka förmåga att känna av människors känslor och skapa djupa band med sina ägare. Med rätt träning, motion och kärlek blir de trogna och glada livskamrater." />
      

    </div>
  );
}

//       <InfoBox title="Hejsansvejsan" shortText="Kort beskrivning..." longText="Längre text om Hejsansvejsan..." />
// <InfoBox title="Här ska vi ha något mer" shortText="Kort beskrivning..." longText="Längre text om något mer..." />