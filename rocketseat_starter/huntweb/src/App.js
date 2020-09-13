import React from 'react';

import Routes from "./routes";

import "./styles.css"

import Header from "./components/Header";

import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Routes />
    </div>
  );
}

export default App;
