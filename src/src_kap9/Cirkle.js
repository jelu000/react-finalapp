import React from 'react'
import PropTypes from 'prop-types'

class Cirkle extends React.Component {
  render () {

    var cirklestyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100
    };


    return (
      <div style={cirklestyle}>

      </div>
    );
  }
}

export default Cirkle;
