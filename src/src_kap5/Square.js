import React from 'react'
import PropTypes from 'prop-types'

class  Square extends React.Component {
  render () {

    var squarestyle = {
      height: 150,
      backgroundColor: this.props.color
      };

    return(
      <div style={squarestyle} />
    );
  }
}

export default Square ;
