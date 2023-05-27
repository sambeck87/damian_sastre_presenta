import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from './redux/chapters/chaptersData';
/* import { getToken } from './redux/chapters/getToken'; */
import Main from './pages/Main';
import Chapters from './pages/Chapters';
import About from './pages/About';
import Contact from './pages/Contact';
import NoFound from './pages/NoFound';

const URL = 'https://api.spotify.com/v1/shows/5mriRyXhrPKOll6EKBfdJo/episodes?market=US';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(URL));
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Capitulos/" element={<Chapters />} />
        <Route path="/Acerca de/" element={<About />} />
        <Route path="/Contacto/" element={<Contact />} />
        <Route path="/querido_gato_loco/" element={<NoFound />} />
      </Routes>
    </>
  );
};

export default App;
