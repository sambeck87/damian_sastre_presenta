import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import chaptersData from './chapters/chaptersData';

const store = configureStore({
  reducer: {
    chaptersData,
  },
}, applyMiddleware(thunk));

export default store;
