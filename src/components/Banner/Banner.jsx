import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import heroImage from '../../img/hero-title.jpg';
import './banner.scss';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner">
      <Parallax
        blur={0}
        bgImage={heroImage}
        bgImageAlt="Hero Background"
        strength={isMobile ? 100 : 200}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'center',
          backgroundColor: '#000'
        }}
      >
        <div className="hero-content">
          <button className="cta-button" onClick={scrollToContact}>
            Contacto
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;