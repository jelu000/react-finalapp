import React from 'react'
//import PropTypes from 'prop-types'

class Counter extends React.Component {
  render () {

    var textstyle = {
      fontSize: 72,
      fontFamily: "sans-serif",
      color: "#333",
      fontWeight: "bold"

    };


    return (
      <div style={textstyle}> {this.props.display} </div>
    );
  }
}

export default Counter;
