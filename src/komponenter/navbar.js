import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="NavbarItems">
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
                <Link to="contact" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                  Information
                </Link>
              </li>
              <li className='nav-item'>
                <Link to="about-us" smooth={true} duration={500} className='nav-links' onClick={closeMobileMenu}>
                  Om oss
                </Link>
              </li>
            </ul>
            </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
