import React from 'react';
import ReactDOM from 'react-dom';

import FunctionalComponent from './FunctionalComponent'
import ClassComponent from './ClassComponent'

ReactDOM.render(
  <React.StrictMode>
    <strong>Functional Component</strong>
    <FunctionalComponent />
    <br/>
    <hr/>
    <strong>Class Component</strong>
    <ClassComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
