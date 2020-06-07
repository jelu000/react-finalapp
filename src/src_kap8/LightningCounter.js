import React from 'react'
import PropTypes from 'prop-types'

class LightnigCounter extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      strikes: 0
    };

    this.timerTick = this.timerTick.bind(this);

  }//end constructor()

  timerTick(){
    this.setState({
      strikes: this.state.strikes + this.props.times
    });
  }//end of timerTick()

  componentDidMount(){
    setInterval(this.timerTick, 1000);
  }

  render () {
    return (
      <div>
       <p>{this.state.strikes}</p>
      </div>
    );
  }
}

export default LightnigCounter;
