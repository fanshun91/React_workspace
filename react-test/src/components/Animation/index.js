import React, { Component, Fragment } from 'react'

import './index.css'

class Animation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hide: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(() => ({
      hide: !this.state.hide
    }))
  }

  render() {
    return (
      <Fragment>
        <p className={this.state.hide ? 'show' : 'fade'}>Hello ~</p>
        <button onClick={this.handleClick}>点击</button>
      </Fragment>
    )
  }
}

export default Animation