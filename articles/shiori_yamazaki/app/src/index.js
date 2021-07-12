import React from 'react';
import ReactDOM from 'react-dom';

import FunctionalComponent from './FunctionalComponent'

ReactDOM.render(
  <React.StrictMode>
    <strong>Functional Component</strong>
    <FunctionalComponent />
    <br/>
    <hr/>
    <strong>Functional Component</strong>
    <FunctionalComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
