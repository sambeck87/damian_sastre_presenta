import React from 'react';
import {
  BsFacebook,
  BsSpotify,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
import { SiAnchor } from 'react-icons/si';
import Cuento from '../components/Cuento';
import '../styles/commons.css';
import '../styles/main.css';

const Main = () => (
  <div id="main_container">
    <div id="mainHeader" className="flex row">
      <h1 id="mainTitle" className="flex row">
        <p className="babylonica damian">Damián Sastré</p>
        <p className="garamond presenta">presenta:</p>
      </h1>
    </div>
    <div id="me" className="flex row">
      <div className="damian_image" />
      <p className="garamond" id="about_me">
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
      <a aria-label="instagram" href="https://allmylinks.com/link/out?id=d2v1s9-1e5hy-bplgeq">
        <BsInstagram style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="spotify" href="https://allmylinks.com/link/out?id=13fmlr1-1e5if-1iqwsot">
        <BsSpotify style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="achor" href="https://anchor.fm/damian-sastre">
        <SiAnchor style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="facebook" href="https://www.facebook.com/damiansastreconacentoenlae">
        <BsFacebook style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
      <a aria-label="youtube" href="https://allmylinks.com/link/out?id=1bpsth5-1e5hx-1kfwh23">
        <BsYoutube style={{ color: '#fff', fontSize: '20px', marginTop: '2px' }} />
      </a>
    </div>
  </div>
);

export default Main;
