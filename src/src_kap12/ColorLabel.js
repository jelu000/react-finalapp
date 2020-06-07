import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types'

class ColorLabel extends React.Component {


  render () {

    var heading = document.getElementById("colorheading");


    return ReactDOM.createPortal(": " + this.props.color, heading
    );
  }
}

export default ColorLabel;
