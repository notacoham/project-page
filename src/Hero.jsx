import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>ACWD Projects</h1>
          <p>
            "Hello! I'm Alex Cottam, a passionate web developer dedicated to
            crafting dynamic and user-friendly websites. Welcome to my
            portfolio, where I showcase a selection of projects that reflect my
            skills, creativity, and commitment to excellence. Take a look around
            and see the work I'm proud to share."
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
