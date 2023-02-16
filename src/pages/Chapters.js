import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BsSpotify } from 'react-icons/bs';
import '../styles/chapters.css';
import '../styles/commons.css';

const Chapters = () => {
  const chapters = useSelector((state) => state.chaptersData);
  const [search, setSearch] = useState('');

  const searchHandle = (e) => setSearch(e.target.value);

  let filtered = [];
  if (!search) {
    filtered = [...chapters];
  } else {
    filtered = [...chapters].filter(
      (data) => data.name.toLowerCase().includes(search.toLocaleLowerCase()),
    );
  }

  return (
    <div className="chaptersContainer">
      <input className="searcher" value={search} id="search" type="text" placeholder=" Busqueda por Título o Autor" onChange={searchHandle} />
      {
        filtered.map((element) => (
          <div key={element.id} className="chapterContainer flex row wrap">
            <div>
              <img className="thumb" src={element.images[1].url} alt="" />
            </div>
            <div className="list_name flex column">
              {element.name}
              <div className="time">
                Duración aprox.:&nbsp;
                {Math.floor(element.duration_ms / 60000)}
                min&nbsp;
                {Math.floor((element.duration_ms % 60000) / 1000)}
                seg
              </div>
            </div>
            <div className="spotify_link">
              <a className="chap_link flex row" href={element.external_urls.spotify}>
                <BsSpotify style={{ color: '#1db954', fontSize: '20px', marginTop: '2px' }} />
                &nbsp;&nbsp;Escúchalo en Spotify
              </a>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Chapters;
