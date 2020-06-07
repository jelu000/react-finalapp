import React from 'react'
//import PropTypes from 'prop-types'

class Display extends React.Component {
  //Unessecery Renders

  render () {
    //console.log("Log");
    return (
      <div>
        <h3>A nice shirt</h3>
        <p>{this.props.color}</p>
        <p>{this.props.num}</p>
        <p>{this.props.size}</p>


      </div>
    );
  }
}

export default Display;
