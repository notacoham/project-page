import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laborum, quasi officia dicta libero voluptas itaque molestias
            debitis quisquam pariatur vitae deserunt sapiente natus at enim
            nostrum. Provident, impedit corrupti.
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
