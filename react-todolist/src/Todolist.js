import React, { Component, Fragment } from 'react';
import './Todolist.css';
import Item from './components/TodoItem'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputVal: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleDeleteItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({ list })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <Item
            key={index}
            context={item}
            index={index}
            delete={this.handleDeleteItem}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <input type="text" value={this.state.inputVal} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>添加</button>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default Todolist;
