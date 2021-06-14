import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import CapsLock from './CapsLock';
import CapsLockChildren from './CapsLockChildren';
import ContadorState from './ContadorState'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CapsLock texto="Me deixe em Caps Lock por favor" />
    <CapsLockChildren>Children</CapsLockChildren>
    <ContadorState />
  </React.StrictMode>,
  document.getElementById('root')
);
