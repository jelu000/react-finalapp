import React from 'react'
//Not using Portals in this class

class ColorLabelNotPortal extends React.Component {
  render () {
    return (
      <h4>{this.props.color}</h4>
    );
  }
}

export default ColorLabelNotPortal ;
