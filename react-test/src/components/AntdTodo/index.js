import React, { Component } from 'react'
import store from '../../store'

import {
  getAddTodoItem,
  getDeleteTodoItem,
  getInputValueChange,
  // getInitList
  getTodoList
} from '../../store/actionCreators'
import IndexUI from './indexUI'



class AntdTodo extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)

    //订阅store中的数据，检测是否发生改变
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    //创建action
    const action = getInputValueChange(e.target.value)
    store.dispatch(action)
  }

  handleClick() {
    const action = getAddTodoItem()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    console.log(index)
    const action = getDeleteTodoItem(index)
    store.dispatch(action)
  }

  handleStoreChange() {
    // 更新组件中的数据
    this.setState(store.getState())
  }

  render() {
    return (
      <IndexUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleClick={this.handleClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }
}

export default AntdTodo