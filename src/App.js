import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getData } from './redux/chapters/chaptersData';
/* import { getToken } from './redux/chapters/getToken'; */
import Main from './pages/Main';
import Chapters from './pages/Chapters';

const URL = 'https://api.spotify.com/v1/shows/5mriRyXhrPKOll6EKBfdJo/episodes?market=US';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(URL));
    /* dispatch(getToken()); */
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chapters/" element={<Chapters />} />
      </Routes>
    </>
  );
};

export default App;
