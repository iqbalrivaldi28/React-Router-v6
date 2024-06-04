import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  //? Memory router pathnya ngak berubah
  // <MemoryRouter>
  //   <App />
  // </MemoryRouter>

  //? Hash router ada tanda # pada path link url
  // <HashRouter>
  //   <App />
  // </HashRouter>

  //? Kalau pake statc routing dia ngak bisa berubah
  // <StaticRouter location='/about'>
  //   <App />
  // </StaticRouter>
);
