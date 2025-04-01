import React from 'react';
import './Hero.css';
import hand_icon from '../Assests/hand_icon.png';
import hero_image from '../Assests/hero_image.png';
import arrow_icon from '../Assests/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
          <p>New</p>
          <img src={hand_icon} alt='Hand Icon' />
        </div>
        <p>Collection</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='Arrow Icon' />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
