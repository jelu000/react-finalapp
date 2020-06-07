import React from 'react';
import './App.css';
import Colorizer from './Colorizer';


function App() {

  return (
    <div className="App">
      <Colorizer />
      <div>
        <p>
          På denna sida har jag använt react-dom och Portals för att lägga ett heading element överst
          i index.html.
        </p>
        <a href="https://reactjs.org/docs/portals.html" target="_blank">https://reactjs.org/docs/portals.html</a>
      </div>
    </div>
  );
}

export default App;
