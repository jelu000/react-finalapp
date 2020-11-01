import React from 'react'
import { Route, NavLink, HashRouter} from 'react-router-dom'
//import PropTypes from 'prop-types'//testar git
import './Menu.css'

class Menu extends React.Component {



  render () {
    var visibility = "hide";
    //console.log("Menu: hide");

    if (this.props.menuVisibility){
      visibility = "show";
      //console.log("Menu: show");
    }

    return (


      <div>


        <div id="flyoutMenu"
          onMouseDown={this.props.handleMouseDown}
          className={visibility}
          >

          <h4> <a href="#"> hej  </a> </h4>
          <h4> <a href="#"> då  </a> </h4>
        </div>

        <HashRouter>

        <div className="contdiv">

            <Route exact  path="/"> <h2>Hej</h2> </Route>
            <a href="http://salongnobless.se/vind/"> <h2>Vind</h2>  </a>


          </div>

        </HashRouter>

      </div>
    );
  }
}

export default Menu;
