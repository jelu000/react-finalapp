import React from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Aboutrouter from './Aboutrouter';
import Reactinfo from './Reactinfo';
import Contactinfo from './Contactinfo';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>TestWebb SPA</h1>
        <ul className="header">
          <li><NavLink exact to="/">About Router</NavLink></li>
          <li><NavLink to="/reactinfo">React</NavLink></li>
          <li><NavLink to="/contactinfo">Contact</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <Route exact path="/" component={Aboutrouter}/>
        <Route path="/reactinfo" component={Reactinfo}/>
        <Route path="/contactinfo" component={Contactinfo}/>
      </div>

    </HashRouter>
  );
}

export default App;
