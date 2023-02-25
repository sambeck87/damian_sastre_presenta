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
// import Diario from '../components/Diario';
import '../styles/commons.css';
import '../styles/main.css';

const Main = () => (
  <div id="main_container">
    <div id="header" className="flex row">
      <h1 id="title">Damian Sastré Presenta:</h1>
    </div>
    <div id="me" className="flex row">
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
    {/* <Diario /> */}
    <hr id="footer_divisor" />
    <div id="social_media" className="flex row">
      <a aria-label="facebook" href="https://allmylinks.com/link/out?id=xs3ngt-1e5hw-1dvs87h">
        <BsFacebook style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="apple" href="https://allmylinks.com/link/out?id=1fi959u-1k5q2-wgfmsq">
        <BsApple style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="spotify" href="https://allmylinks.com/link/out?id=13fmlr1-1e5if-1iqwsot">
        <BsSpotify style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="google" href="https://allmylinks.com/link/out?id=6nz3ra-1e5iu-1vvn6zg">
        <BsGoogle style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="amazon" href="https://allmylinks.com/link/out?id=1d2h70x-1k3vd-1slqjqo">
        <FaAmazon style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="youtube" href="https://allmylinks.com/link/out?id=1bpsth5-1e5hx-1kfwh23">
        <BsYoutube style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="instagram" href="https://allmylinks.com/link/out?id=d2v1s9-1e5hy-bplgeq">
        <BsInstagram style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
    </div>
  </div>
);

export default Main;
