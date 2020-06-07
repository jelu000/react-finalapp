import React from 'react'
//import PropTypes from 'prop-types'
import Counter from './Counter'
import MinusButton from './MinusButton'

class Counterparent extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      count: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(e){
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease(e){
    this.setState({
      count: this.state.count - 1
    });
  }
// Tog bort componenWillMount() för Will är deprecated
  componentDidUpdate(currentProps, curentState) {
    console.log("componentDidUpdate: component just updated");
  }

  componentDidMount() {
    console.log("componentDidMount: component just mounted");
  }

  componentWillReciveProps(newProps) {
    console.log("componentWillReciveProps: component will get new props");
  }

  componentWillUnmount(){
    console.log("componentWillUnmount: component about to unmount");
  }

  shouldComponentUpdate(newProps, newState){
    console.log("shouldComponentUpdate: Should component update?");
//Detta kommer göra så att inte knappen funkar efter +5 klick
    if (newState.count < 5){
      console.log("shouldComponentUpdate: component should update!");
      return true;
    }
    else {
      console.log("shouldComponentUpdate: component should NOT update!");
      return false;
    }

  }




  render () {

    var backgroundstyle = {
      marginLeft: 100,
      padding: 50,
      backgroundColor: "#FFC53A",
      width: 250,
      height: 400,
      borderRadius: 10,
      textAlign: "center"
    };

    var buttonstyle = {
      fontSize: "1em",
      fontFamily: "sans-serif",
      width: 60,
      height: 30,
      color: "#333",
      fontWeight: "bold",
      lineHeight: "3px"


    };

    return (
      <div style={backgroundstyle}>
        <Counter display={this.state.count} />
        <button onClick={this.increase} style={buttonstyle}>+</button>
        <MinusButton onClick={this.decrease} bstyle={buttonstyle} />
        <p>If state count > 5 will do that the button do not work after +5 click.</p>
        <p>  shouldComponentUpdate(newProps, newState)</p>
        <p>    if newStatecount mer än fem return true</p>
        <p>    else return false</p>
      </div>
    );
  }
}
console.log("Default props: Default prop time");
Counterparent.defaultProps = {

};


export default Counterparent;
