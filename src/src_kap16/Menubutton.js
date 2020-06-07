import React from 'react'
//import PropTypes from 'prop-types'
import './Menubutton.css'
class Menubutton extends React.Component {
  //Unessecery Renders
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }

  render () {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
      </button>
    );
  }
}

export default Menubutton;
