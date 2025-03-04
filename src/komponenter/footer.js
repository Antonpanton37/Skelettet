import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>KUNDSERVICE</h3>
          <p>Beställning</p>
          <p>Betalning</p>
          <p>Byte & retur</p>
          <p>Frakt & leverans</p>
          <p>Reklamation</p>
          <p>Kontakta oss</p>
        </div>
        <div className="footer-section">
          <h3>INFORMATION</h3>
          <p>Integritetspolicy</p>
          <p>Cookies</p>
          <p>Köpvillkor</p>
          <p>FAQ</p>
          <p>Presentkort</p>
        </div>
        <div className="footer-section">
          <h3>FÖLJ OSS</h3>
          <div className="social-icons">
        <span role="img" aria-label="Facebook">
        <FontAwesomeIcon icon={faFacebook} />
        </span>
        <span role="img" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
        </span>
        <span role="img" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} />
        </span>
        </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 PacePal. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}

export default Footer;
