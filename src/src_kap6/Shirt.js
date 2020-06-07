import React from 'react'
//import PropTypes from 'prop-types'
import Label from './Label'


class Shirt extends React.Component {

  render () {
    //console.log("Shirt");
    var tstyle = {marginLeft: 100};
    return (



      <div style={tstyle}>


        <Label {...this.props}  />

      </div>



    );
  }
}

export default Shirt;
