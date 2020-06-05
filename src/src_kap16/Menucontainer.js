import React from 'react'
import Menubutton from './Menubutton'
import Menu from './Menu'

class Menucontainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      visible: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu(){
      this.setState({
        visible: !this.state.visible
      });
  }
  handleMouseDown(e){
    this.toggleMenu();

    console.log("CLICK");
    e.stopPropagation();
  }

  render () {
    return (
      <div>
      <Menubutton  handleMouseDown={this.handleMouseDown}/>
      <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />

      
      </div>
    );
  }
}

export default Menucontainer;
