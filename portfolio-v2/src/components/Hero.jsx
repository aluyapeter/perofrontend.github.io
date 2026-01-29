import React from 'react';
import { heroData } from '../data/content';

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        {heroData.greeting} <span className="highlight">{heroData.role}</span>
      </h1>
      <p className="hero-intro">{heroData.intro}</p>

      {/* <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          View My Work
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
