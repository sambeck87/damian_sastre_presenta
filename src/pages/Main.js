import React from 'react';
import {
  BsFacebook,
  BsApple,
  BsSpotify,
  BsGoogle,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
import { FaAmazon } from 'react-icons/fa';
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
    <hr id="footer_divisor" />
    <div id="social_media" className="flex row">
      <BsFacebook style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <BsApple style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <BsSpotify style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <BsGoogle style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <FaAmazon style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <BsYoutube style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      <BsInstagram style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
    </div>
  </div>
);

export default Main;
