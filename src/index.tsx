import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Glossary from './pages/glossary/glossary';
import Layout from './component/layout/layout';
import NotFound from './pages/404/404';
import Rankings from './pages/hand-rankings/hand-rankings';
import Rules from './pages/rules/rules';
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
        <Route path="glossary" element={<Glossary />} />
        <Route path="rules" element={<Rules />} />
        <Route path="rankings" element={<Rankings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);