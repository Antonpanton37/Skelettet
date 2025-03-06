
import React from 'react';
import Navbar from './komponenter/navbar';
import Home from './komponenter/hem';  // Importera Home-komponenten
import './App.css';
import Footer from './komponenter/footer';
import RunningCalculator from './komponenter/kalk';
import Omoss from './komponenter/omoss';
import Kontakt from './komponenter/kontakt';
import InfoSection from './komponenter/info';
function App() {
  return (
    <>
      <Navbar />
      <Home /> 
      <RunningCalculator />
      <InfoSection/>
      <Omoss/>
      <Kontakt/>
      <Footer />
    </>
  );
}

export default App;
