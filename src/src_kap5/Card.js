import React from 'react'
//import PropTypes from 'prop-types'
import Square from "./Square"
import Label from "./Label"

class Card extends React.Component {



  render () {

    var cardstyle = {
      height: 200,
      width: 150,
      padding: 0,
      margin: 80,
      backgroundColor: "#FFF",
      boxShadow: "0px 0px 5px #666"
    };

      return (
        <div style={cardstyle}>

          <Square color={this.props.color} />
          <Label color={this.props.color} />
        </div>
      );
  }
}

export default Card;
