import React from 'react';
import '../styles/commons.css';
import '../styles/diario.css';

const Diario = () => (
  <div id="diario_container">
    <h2 id="diario_subtitle" className="text-center">
      Casi Diario de un Loco TV
    </h2>
    <div className="casi_diario d-flex flex-column">
      <h3 className="video_title text-center">Capítulo 03 - Los peces desean aprender a volar</h3>
      <iframe className="video" src="https://www.youtube-nocookie.com/embed/cXO0lo_A2tE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
    <hr className="chapter_divisor" />
    <div className="casi_diario d-flex flex-column">
      <h3 className="video_title text-center">Capítulo 02 - El resto... fue destino</h3>
      <iframe className="video last" src="https://www.youtube-nocookie.com/embed/VFh_YDPTROw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    </div>
  </div>
);

export default Diario;
