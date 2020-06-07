import React from 'react'
import Cirkle from './Cirkle'

class MainApp9 extends React.Component {


  render () {
    var backgroundStyle = { marginLeft: 100 };
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40C4E"];
    var tCirkle = <Cirkle bgColor="#F9C240" />
    var cirkelarray = [];

    for (let i = 0; i < colors.length; i++){
    cirkelarray.push(< Cirkle key={i+colors} bgColor={colors[i]} />);
  }

    return (
      <div style={backgroundStyle}>
        <Cirkle bgColor="#F9C240" />
        {tCirkle}
        <hr />
        {cirkelarray}
      </div>

    );

  }
}

export default MainApp9;
