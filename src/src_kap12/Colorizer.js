import React from 'react'
//import PropTypes from 'prop-types'//
//import ColorLabel from './ColorLabel'
import ColorLabelNotPortal from './ColorLabelNotPortal'

  /*<ColorLabel color={this.state.bgColor} />  TOG BORT DET FÖR att tabort ColorLabel och Portals*/

class Colorizer extends React.Component {

  constructor (props){
    super(props);

    this.state = {
      color: "",
      bgColor: "white"
    };

    this.colorValue = this.colorValue.bind(this);
    this.setNewColor = this.setNewColor.bind(this);
  }

  colorValue(e){
    this.setState({
      color: e.target.value
    });
  }

  setNewColor(e){
    this.setState({
      bgColor: this.state.color
    });

    this._input.focus();
    this._input.value="";
    /*använda arrow function så behövs ej self variabel!
    var self = this;
    ref={  function(el){ self.input=el; }  }
    */

    e.preventDefault();
  }


  render () {

    var squareStyle = {
      backgroundColor: this.state.bgColor
    };

    //var self = this;

    return (
      <div>
        <div className="colorArea">
          <div style={squareStyle} className="colorSquare" />
          <form onSubmit={this.setNewColor}>
            <input onChange={this.colorValue} ref={  (el) => this._input=el  }  placeholder="Enter a color value" ></input>
            <button>go</button>
          </form>
        </div>

        <div><ColorLabelNotPortal color={this.state.bgColor} /></div>
      </div>
    );
    //  /*<ColorLabel color={this.state.bgColor} />*/
  }

}

export default Colorizer;
