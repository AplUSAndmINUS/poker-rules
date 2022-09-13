import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/main.scss';

const SampleApp = () => {
  return ( <h1>Hi React!</h1> )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SampleApp />
  </React.StrictMode>
);