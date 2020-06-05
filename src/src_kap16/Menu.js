import React from 'react'
//import PropTypes from 'prop-types'
import './Menu.css'

class Menu extends React.Component {
  render () {
    var visibility = "hide";
    console.log("Menu: hide");

    if (this.props.menuVisibility){
      visibility = "show";
      console.log("Menu: show");
    }

    return (
      <div id="flyoutMenu"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}
        >
        <h4> <a href="#">Home</a> </h4>
        <h4> <a href="#">About</a> </h4>
        <h4> <a href="#">Search</a> </h4>
        <h4> <a href="#">Contact</a> </h4>
      </div>
    );
  }
}

export default Menu;
