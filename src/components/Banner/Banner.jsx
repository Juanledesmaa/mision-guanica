import React from 'react';
import { Parallax } from 'react-parallax';
import './banner.scss';

const Banner = () => (
  <div className="banner">
    <Parallax
      blur={0}
      bgImage="https://via.placeholder.com/1920x1080/333333/666666?text=Hero+Background"
      bgImageAlt="Hero Background"
      strength={200}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Your Site</h1>
        <p className="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <button className="cta-button">Get Started</button>
      </div>
    </Parallax>
  </div>
);

export default Banner;