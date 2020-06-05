import React from 'react'
//import PropTypes from 'prop-types'
import './Menubutton.css'
class Menubutton extends React.Component {
  render () {
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
      </button>
    );
  }
}

export default Menubutton;
