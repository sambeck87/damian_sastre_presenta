import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import chaptersData from './chapters/chaptersData';
/* import Token from './chapters/getToken'; */

const store = configureStore({
  reducer: {
    chaptersData,
    /* Token, */
  },
}, applyMiddleware(thunk));

export default store;
