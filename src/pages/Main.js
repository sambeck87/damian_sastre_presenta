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
        dolore magna aliqua. Netus et malesuada fames ac.
        Faucibus purus in massa tempor nec. Consectetur
        lorem donec massa sapien. Quam adipiscing vitae
        proin sagittis nisl. Purus gravida quis blandit
        turpis cursus in. Magnis dis parturient montes
        nascetur ridiculus mus mauris vitae ultricies.
        Iaculis urna id volutpat lacus laoreet non.
        Pellentesque elit ullamcorper dignissim cras
        tincidunt. Amet aliquam id diam maecenas ultricies
        mi eget mauris pharetra. Elit sed vulputate mi sit
        amet mauris. Tellus elementum sagittis vitae et leo
        duis ut diam. Velit aliquet sagittis id consectetur
        purus ut. Consectetur lorem donec massa sapien
        faucibus et molestie ac feugiat. Non quam lacus
        suspendisse faucibus interdum posuere lorem.
      </p>
    </div>
    <Cuento />
    <Diario />
  </div>
);

export default Main;
