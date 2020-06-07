import React from 'react'
import PropTypes from 'prop-types'

class Aboutrouter extends React.Component {
  render () {
    return (
      <div>
        <h3>Routing in React</h3>
        <p>
        Routing in React is all about navigation between pages or components in a singel page app.
        </p>
        <p>
        You have to intall router with the command: npm install react-router-dom or with Yarn:
        yarn add react-router-dom. Then your good to go!
        </p>

        <p>OBS: glöm inte att sätta NavLinik och Route till atributet-> exact för att navigeringen ska funka korrekt!</p>
      </div>
    );
  }
}

export default Aboutrouter;
