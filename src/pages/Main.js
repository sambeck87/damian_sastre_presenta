import React from 'react';
import Cuento from '../components/Cuento';
import Diario from '../components/Diario';
import '../styles/commons.css';
import '../styles/main.css';

const Main = () => (
  <div id="main_container">
    <div className="flex row">
      <div className="damian_image" />
      <p id="about_me">
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
    <Cuento />
    <Diario />
  </div>
);

export default Main;
