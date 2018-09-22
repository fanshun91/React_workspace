import React, { Component } from 'react'
import store from '../../store'
import {
  getInputValueAction,
  getAddTodoAction,
  getDeleteItemAction,
  getTodoList
} from '../../action/actionCreator'

import UI from './UI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)

    store.subscribe(this.handleStateChange)
  }

  handleInputChange(e) {
    const action = getInputValueAction(e.target.value)

    store.dispatch(action)
  }

  handleSubmit() {
    const action = getAddTodoAction()

    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)

    store.dispatch(action)
  }

  handleStateChange() {
    this.setState(store.getState())
  }

  render() {
    return (
      <UI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
}

export default TodoList