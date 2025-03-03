import React from 'react';
import Navbar from './komponenter/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// export NODE_OPTIONS=--openssl-legacy-provider, use before npm start
import sida1 from './sidor/sida1';
import sida2 from './sidor/sida2';
import sida3 from './sidor/sida3';



function App() {
  return (
    <>
      <Router>
        <Navbar /> {/* Corrected Navbar component */}
        <Routes>
          <Route path='/' element={<h1> hem</h1>} />
        <Route path="/page1" element={<sida1 />} />
        <Route path="/page2" element={<sida2 />} />
        <Route path="/page3" element={<sida3 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


