
import React from 'react';
import Navbar from './komponenter/navbar';
import Home from './komponenter/hem';  // Importera Home-komponenten
import './App.css';
import Footer from './komponenter/footer';
import RunningCalculator from './komponenter/kalk';
import Omoss from './komponenter/omoss';
import Information from './komponenter/information'; 
import Rad from './komponenter/rad'

function App() {
  return (
    <>
      <Navbar />


      <Home /> 
  

      <RunningCalculator />


      <Information/>


      <Omoss/>


      
      <Footer/>
    </>
  );
}

export default App;
