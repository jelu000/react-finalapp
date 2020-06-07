import React from 'react';
import './App.css';
import Shirt from './Shirt';

function App() {
  return (
    <div className="App">
      <h3>Från och med es6 ska bara spread operator ... fungera på array och inte props!</h3>

      <Shirt color="steelblue" num="3.14" size="medium" />

    </div>
  );
}

export default App;
