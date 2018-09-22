import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Display extends Component {
  render() {
    return <p>{this.props.textVal}</p>
  }
}

Display.propTypes = {
  textVal: PropTypes.string
}

export default Display