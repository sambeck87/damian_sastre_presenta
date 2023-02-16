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
      <div id="dejame_container" className="flex column">
        <h2 id="main_subtitle" className="center">
          Déjame leerte un cuento
        </h2>
        <div className="flex column cuento_content">
          <h3 className="ultimo">Último Capítulo</h3>
          <a href={capitulo.external_urls.spotify}><img className="main_image" src={capitulo.images[1].url} alt="Imagen_capitulo" /></a>
          <span className="center description">{capitulo.name}</span>
          <span className="release">
            Publicado:&nbsp;
            {capitulo.release_date}
          </span>
        </div>
        <hr className="divisor" />
        <div className="flex column cuento_content">
          <h3 className="ultimo" id="ultimo_rapidin">Último Rapidín</h3>
          <a href={rapidin.external_urls.spotify}><img className="main_image" src={rapidin.images[1].url} alt="Imagen_rapidin" /></a>
          <span className="center description">{rapidin.name}</span>
          <span className="rapidin_release release">
            Publicado:&nbsp;
            {rapidin.release_date}
          </span>

        </div>
      </div>
    );
  }
  return null;
};
export default Cuento;
