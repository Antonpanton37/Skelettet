import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          
   
      <h2>Kontakta oss</h2>
      <p>För alla förfrågningar, tveka inte att höra av dig. Vi är alltid på jakt efter kreativa idéer, intressanta samarbetspartners och nya perspektiv.</p>
      <p>Vi är baserade på Chalmers tekniska högskola i Göteborg.</p>
      <p>info@pacepal.se</p>

    </div>

    <div className="footer-image-container">
      <img src="/Nils.jpeg" alt="PacePal" className="footer-image" />
    </div>
  </div>
      <div className="footer-bottom">
        <p>© 2025 PacePal. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}

export default Footer;
