import React from 'react'
//import PropTypes from 'prop-types'

class Frag extends React.Component {







  render () {
    console.log("TESTA");
    const Tt = () => <div>TESTAR</div>

    return (


    <div>
    <Tt />
    <React.Fragment>
    Bra sätt att skapa Fragment
    <br /><br />
    <>Dåligt sätt att skapa Fragment</>
    </React.Fragment>
    </div>
    );
  }
}

export default Frag;
