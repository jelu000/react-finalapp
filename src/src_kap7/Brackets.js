import React from 'react'
import PropTypes from 'prop-types'

class Brackets extends React.Component {
  
  render () {
   return (
     [
       <p key='1'>first p in array</p>,
       <p key='2'>second p in array</p>
     ]

   );
  }
}

export default Brackets;
