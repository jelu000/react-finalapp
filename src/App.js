import React from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Aboutrouter from './src_kap18/Aboutrouter';
import Reactinfo from './src_kap18/Reactinfo';
import Contactinfo from './src_kap18/Contactinfo';
import MainKap5 from './src_kap5/MainKap5';
import Shirt from './src_kap6/Shirt';
import Main7 from './src_kap7/Main7';
import LightningCounterDisplay from './src_kap8/LightningCounterDisplay';
import MainApp9 from './src_kap9/MainApp9';
import Counterparent from './src_kap10/Counterparent';
import MainApp12 from './src_kap12/MainApp12';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1 className="huvudHead">FinalApp in React</h1>
        <ul className="header">
          <li><NavLink exact to="/">About Router</NavLink></li>
          <li><NavLink to="/kap5">Kap 5 props</NavLink></li>
          <li><NavLink to="/kap6">Kap 6 spread operator</NavLink></li>
          <li><NavLink to="/kap7">kap 7 fragment </NavLink></li>
          <li><NavLink to="/kap8">kap 8 state</NavLink></li>
          <li><NavLink to="/kap9">kap 9 arrays</NavLink></li>
          <li><NavLink to="/kap10">kap 10 events</NavLink></li>
          <li><NavLink to="/kap12">kap 12 refs and portals</NavLink></li>
        </ul>
      </div>

      <div className="content">
        <Route exact path="/" component={Aboutrouter}/>
        <Route exact path="/kap5" component={MainKap5}/>
        <Route exact path="/kap6" render={(props) => <Shirt {...props} color="coralred" num="332" size="medium" />}/>
        <Route path="/kap7" component={Main7}/>
        <Route path="/kap8" component={LightningCounterDisplay}/>
        <Route path="/kap9" component={MainApp9}/>
        <Route path="/kap10" component={Counterparent}/>
        <Route path="/kap12" component={MainApp12}/>
      </div>

    </HashRouter>
  );
}

export default App;
