import React, { useState, useEffect } from 'react';
import Navbar from './komponenter/navbar';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons'; 
import Footer from './komponenter/footer';
import RunningCalculator from './komponenter/kalk';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  const [fadeOutImage, setFadeOutImage] = useState(false);

  useEffect(() => {
    // After 0.5 seconds, start the fade-out of the image
    const timer = setTimeout(() => {
      setFadeOutImage(true);
    }, 500); // Delay for 0.5 seconds

    // After 1.5 seconds (image fade time), show the video
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1500); // The time corresponds to the fade duration of the image (1 second)

    // Cleanup the timers if the component unmounts
    return () => {
      clearTimeout(timer);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div id="home" className="section">
        {/* Show the image first */}
        <div className={`image-background ${fadeOutImage ? 'fade-out' : ''}`}>
          <img src="/img6.webp" alt="" />
        </div>

        {/* Show the video after 0.5 seconds (fade-out completes at 1.5 seconds) */}
        {showVideo && (
          <div className="video-background">
            <video autoPlay loop muted>
              <source src="/untitled.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        <div className="content">
          <FontAwesomeIcon icon={faRunning} className="icon" />
          <p>Välkommen till PacePal!</p>
        </div>
      </div>
      <div id="calculator" className="section">
        <h1>Kalkylator</h1>
        <p>Här kan du beräkna din löptakt.</p>
        <RunningCalculator/>
      </div>
      <div id="about-us" className="section">
        <h1>Om oss</h1>
        <p>Vi hjälper löpare att förbättra sin prestation.</p>
      </div>
      <div className="image-row">
        <img src="/img-1.webp" alt="Image 1" className="small-image" />
        <img src="/img-4.webp" alt="Image 2" className="small-image" />
        <img src="/img-5.avif" alt="Image 3" className="small-image" />
      </div>
      <div id="contact" className="section">
        <h1>Kontakt</h1>
        <p>Kontakta oss för mer information.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
