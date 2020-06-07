import React from 'react'
//import PropTypes from 'prop-types'

class MinusButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.onClick} style={this.props.bstyle}>-</button>
    );

  }
}

export default MinusButton;
