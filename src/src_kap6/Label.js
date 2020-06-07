import React from 'react'
//import PropTypes from 'prop-types'
import Display from './Display'


class Label extends React.Component {
  render () {
    return (
      <div>
          <Display {...this.props}  />
      </div>
    );
  }
}

export default Label;
