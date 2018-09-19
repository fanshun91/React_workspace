import React, { Component } from 'react'

class TodoItem extends Component {

  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    // const { delete, index } = this.props
    // delete (index)
    this.props.delete(this.props.index)
  }

  render() {
    const { context } = this.props
    return (
      <li onClick={this.handleDelete}>{context}</li>
    )
  }
}

export default TodoItem