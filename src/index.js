import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import Navbar from './components/Navbar';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Navbar />
      <App />
    </BrowserRouter>
  </Provider>,
);
