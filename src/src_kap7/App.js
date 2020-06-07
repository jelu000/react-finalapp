import React from 'react';
import './App.css';
import Brackets from './Brackets';
import Comments from './Comments';// en kommentar
import Frag from './Frag';


function App() {
  return (
    <div className="App">

      
      <Comments /*Det här är en kommentar*/ />


      <Brackets />
      <Frag />


    </div>
  );
}

export default App;
