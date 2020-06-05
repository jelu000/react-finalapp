import React from 'react'
import PropTypes from 'prop-types'

class Label extends React.Component {


  

  render () {

    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return (
      <p style={labelStyle}>{this.props.color}</p>
    );
  }
}

export default Label;
