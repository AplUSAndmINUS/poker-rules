import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Games from './pages/games/games';
import Home from './pages/home/home';
import Layout from './component/layout/layout';
import NotFound from './pages/404/404';
import Rankings from './pages/hand-rankings/hand-rankings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);