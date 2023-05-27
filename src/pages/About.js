import React from 'react';
import '../styles/commons.css';
import '../styles/about.css';

const About = () => (
  <div id="about_container" className="d-flex flex-column">
    <div id="header" className="d-flex row">
      <h1 id="title">acerca de:</h1>
    </div>
    <p id="about_page">
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Netus et malesuada fames ac.
      Faucibus purus in massa tempor nec.
    </p>
  </div>
);

export default About;
