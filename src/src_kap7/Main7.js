import React from 'react'
import Comments from './Comments'
import Brackets from './Brackets'
import Frag from './Frag'

class Main7 extends React.Component {
  render () {
      var tstyle = {marginLeft: 100};
      return(
        <div style={tstyle}>
        <Comments /*Det här är en kommentar*/ />
        <Brackets />
        <Frag />
        </div>
      );
  }
}

export default Main7;
