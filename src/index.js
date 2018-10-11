import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import './index.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import App from './components/App';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
render(app, document.getElementById('root'));
