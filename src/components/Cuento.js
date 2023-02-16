import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/commons.css';
import '../styles/cuento.css';

const Cuento = () => {
  const chapters = useSelector((state) => state.chaptersData);

  let capitulo = [];
  let rapidin = [];

  if (chapters.length > 90) {
    if (chapters[0].name.includes('Rapidín')) {
      rapidin = chapters[0]; // eslint-disable-line prefer-destructuring
      capitulo = chapters[1]; // eslint-disable-line prefer-destructuring
    } else {
      rapidin = chapters[1]; // eslint-disable-line prefer-destructuring
      capitulo = chapters[0]; // eslint-disable-line prefer-destructuring
    }
    return (
      <div id="dejame_container" className="flex row wrap">
        <h2>
          Déjame leerte un cuento
        </h2>
        <div>
          <h3>Último Capítulo</h3>
          <a href={capitulo.external_urls.spotify}><img src={capitulo.images[1].url} alt="Imagen_capitulo" /></a>
          <span>{capitulo.name}</span>
          <span>{capitulo.release_date}</span>
        </div>
        <div>
          <h3>Último Rapidín</h3>
          <a href={rapidin.external_urls.spotify}><img src={rapidin.images[1].url} alt="Imagen_rapidin" /></a>
          <span>{rapidin.name}</span>
          <span>{rapidin.release_date}</span>

        </div>
      </div>
    );
  }
  return null;
};
export default Cuento;
