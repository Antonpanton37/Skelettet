import React from 'react';
import './App.css';
import Footer from './komponenter/footer';
import Home from './komponenter/hem'; // Importera Home-komponenten
import Information from './komponenter/information';
import RunningCalculator from './komponenter/kalk';
import Navbar from './komponenter/navbar';
import Omoss from './komponenter/omoss';

/*
Notes:
1. Dont use swedish!!!
2. Name components and CSS files NavBar, Home, Information, RunningCalculator, Footer
3. Add loading state to RunningCalculator component
*/

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <RunningCalculator />

      <Information />

      <Omoss />

      <Footer />
    </>
  );
}

export default App;
