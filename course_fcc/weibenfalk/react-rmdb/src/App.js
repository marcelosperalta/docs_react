import React from 'react';

// Styles
import { GlobalStyle } from './GlobalStyle';

// ----- without JSX using ES6:
// const Star = () => React.createElement('div', null, 'This is a little star');
// const App = () => {
//   return Star();
// }

// ----- using JSX:

// ES6:
// const App = () => {
//   return (
//     <div className="App">
//       Start here.
//     </div>
//   );
// }

// ES5:
function App() {
  return (
    <div className="App">
      Start here.
      <GlobalStyle />
    </div>
  );
}

export default App;