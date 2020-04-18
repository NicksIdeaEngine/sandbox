import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from './App';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <div className="page">
    <App />
  </div>,
  rootContainer,
);
