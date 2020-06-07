import React from 'react'
import PropTypes from 'prop-types'
import LightningCounter from './LightningCounter'

class LightningCounterDisplay extends React.Component {
  render () {

    var commonstyle = {

      margin: 0,
      padding: 0
    };

    var divstyle = {

      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10,
      marginTop: 50,
      marginLeft: 100
    };

    var textstyle = {
      emphasis: {
        fontSize: 14,
        ...commonstyle
      },

      smallemphasis: {
        ...commonstyle
      },

      small: {
        fontSize: 8,
        opacity: 0.5,
        ...commonstyle
      }

    };


    return (
      <div style={divstyle}>
        <LightningCounter times={2} />
        <h4 style={textstyle.smallemphasis}>LIGHTNING-STRIKES!</h4>
        <h4 style={textstyle.emphasis}>WORDWIDE</h4>
        <p style={textstyle.emphasis}>since you loadet this exemple</p>
      </div>
    );
  }
}

export default LightningCounterDisplay;
