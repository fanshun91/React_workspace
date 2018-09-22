import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './index.css'

class AnimTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  handleClick() {
    this.setState(prevState => ({
      list: [...prevState.list, 'item']
    }))
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={600}
          classNames='fade'
          onEntered={el => el.style.color = 'teal'}
        >
          <p>Hello!!</p>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
        <br />
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  in={this.state.show}
                  timeout={600}
                  classNames='fade'
                  appear={true}
                >
                  <p>{item}</p>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleClick}>添加</button>
      </Fragment>
    )
  }
}

export default AnimTest