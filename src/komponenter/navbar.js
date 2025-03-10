
import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Importera Link från react-scroll
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons'; 

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href="#" className='navbar-logo' onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faRunning} className="navbar-icon" /> PacePal
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="home" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                Start
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="calculator" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                Kalkylator
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="about-us" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                Om oss
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="contact" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
