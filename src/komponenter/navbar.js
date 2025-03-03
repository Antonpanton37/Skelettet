// // import React, { useState } from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faRunning } from '@fortawesome/free-solid-svg-icons'; 
// // import { Link } from 'react-router-dom';
// // import './navbar.css'; // Om du har en CSS-fil för styling
// // import { Button } from './Button.js';
// // import './navbar.css'; 

// // function Navbar() {
// //   const [click, setClick] = useState(false);
// //   const [button, setButton] = useState(true);
// //   const handleClick = () => setClick(!click);
// //   const closeMobileMenu = () => setClick(false);
// //   const showbutton = () => {
// //     if(window.innerWidth <= 960) {
// //       setButton(false)
// //     } else {
// //       setButton(true)
// //     }
// //   };
// //   window.addEventListener('resize', showbutton);

// //   return (
// //     <>
// //       <nav className="navbar">
// //         <div className="navbar-container">
// //           <div to="/" className="navbar-logo">
// //             <FontAwesomeIcon icon={faRunning} className="navbar-icon" /> Run
// //             <div className='menu-icon' onClick={handleClick}>
// //               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

// //             </div>
// //             <ul className={click ? 'nav-menu active': 'nav-menu'}>
// //               <li className='nav-item'>
// //                 <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
// //                 Home
// //                 </Link>
// //               </li>
// //               <li className='nav-item'>
// //                 <Link to='/Calculator' className='nav-links' onClick={closeMobileMenu}>
// //                 Calculator
// //                 </Link>
// //               </li>
// //               <li className='nav-item'>
// //                 <Link to='/About-us' className='nav-links' onClick={closeMobileMenu}>
// //                 About us  
// //                 </Link>
// //               </li>

// //             </ul>
// //             {button && <Button buttonStyle='btn--outline'>About-us
// //               </Button>}
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // }

// // export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRunning } from '@fortawesome/free-solid-svg-icons'; 
// import { Link } from 'react-router-dom';
// import './navbar.css'; 
// import { Button } from './Button.js';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   // Kör `showButton` vid första renderingen och lägg till en eventlistener
//   useEffect(() => {
//     showButton();
//     window.addEventListener('resize', showButton);
    
//     return () => {
//       window.removeEventListener('resize', showButton);
//     };
//   }, []);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//             <FontAwesomeIcon icon={faRunning} className="navbar-icon" /> 
//             PacePal
//           </Link>

//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>

//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/Calculator' className='nav-links' onClick={closeMobileMenu}>
//                 Calculator
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link to='/About-us' className='nav-links' onClick={closeMobileMenu}>
//                 About us  
//               </Link>
//             </li>
//           </ul>

//           {button && (
//             <Link to="/about-us">
//               <Button buttonStyle="btn--outline">Random

//               </Button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons'; 
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <FontAwesomeIcon icon={faRunning} className="navbar-icon" /> 
                       PacePal
             
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Calculator
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;