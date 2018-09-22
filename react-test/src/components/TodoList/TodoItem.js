import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  // 子组件从父组件接受到了传递的参数
  // 父组件的render函数被重新执行后，该函数就会被执行
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps')
  // }

  // 组件即将被移除时执行
  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.context !== this.props.context) {
      return true
    }

    return false
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.context}</li>
  }
}

TodoItem.propTypes = {
  context: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default TodoItem