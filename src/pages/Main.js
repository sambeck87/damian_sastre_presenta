import React from 'react';
import {
  BsFacebook,
  BsSpotify,
  BsYoutube,
  BsInstagram,
  BsApple,
  BsGoogle,
} from 'react-icons/bs';
import {
  SiAmazon,
  SiCastbox,
  SiPocketcasts,
  SiRadiopublic,
  SiStitcher,
  SiTunein,
} from 'react-icons/si';
import Cuento from '../components/Cuento';
import '../styles/commons.css';
import '../styles/main.css';

const Main = () => (
  <div id="main_container">
    <div id="mainHeader" className="d-flex flex-row">
      <h1 id="mainTitle" className="d-flex flex-row">
        <p className="babylonica damian">Damián Sastré</p>
        <p className="garamond presenta">presenta:</p>
      </h1>
    </div>
    <div id="me" className="d-flex flex-row">
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
    <div id="social_media" className="d-flex flex-row">
      <a aria-label="instagram" href="https://allmylinks.com/link/out?id=d2v1s9-1e5hy-bplgeq">
        <BsInstagram className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
      </a>
      <p>
        <a aria-label="spotify" data-bs-toggle="collapse" href="#podcast" role="button" aria-expanded="false" aria-controls="podcast">
          <BsSpotify className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
      </p>
      <a aria-label="facebook" href="https://www.facebook.com/damiansastreconacentoenlae">
        <BsFacebook className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
      </a>
      <a aria-label="youtube" href="https://allmylinks.com/link/out?id=1bpsth5-1e5hx-1kfwh23">
        <BsYoutube className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
      </a>
    </div>
    <div className="collapse bg-black margin_colap mb-3" id="podcast">
      <div className="card card-body bg-black d-flex flex-row justify-content-around">
        <a aria-label="spotify" href="https://allmylinks.com/link/out?id=13fmlr1-1e5if-1iqwsot">
          <BsSpotify className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="Apple" href="https://allmylinks.com/link/out?id=1fi959u-1k5q2-wgfmsq">
          <BsApple className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="Google" href="https://allmylinks.com/link/out?id=6nz3ra-1e5iu-1vvn6zg">
          <BsGoogle className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="Amazon" href="https://allmylinks.com/link/out?id=1d2h70x-1k3vd-1slqjqo">
          <SiAmazon className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="CastBox" href="https://allmylinks.com/link/out?id=1hyk50m-1e5ih-11sm9e6">
          <SiCastbox className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="PocketCast" href="https://allmylinks.com/link/out?id=w8wzew-1k3ua-5ek6fm">
          <SiPocketcasts className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="RadioPublic" href="https://allmylinks.com/link/out?id=1w764p-1k3td-1lgal3z">
          <SiRadiopublic className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="Stitcher" href="https://allmylinks.com/link/out?id=9ozkdo-1k3vg-8mmmef">
          <SiStitcher className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
        <a aria-label="Tunein" href="https://allmylinks.com/link/out?id=1hyk50m-1e5ih-11sm9e6">
          <SiTunein className="media_icon" style={{ color: '#fff', marginTop: '2px' }} />
        </a>
      </div>
    </div>
  </div>
);

export default Main;
