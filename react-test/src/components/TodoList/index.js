import React, { Component, Fragment } from 'react';
// import axios from 'axios'

import TodoItem from './TodoItem'
import Display from './Display'
// import Animation from './components/Animation'
import AnimTest from '../AnimTest'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: []
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }), () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputVal: value
    }))
  }

  handleDelete(index) {
    this.setState(prevState => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }

  addTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          context={item}
          index={index}
          deleteItem={this.handleDelete}
        />
      )
    })
  }

  // 在组件被即将挂载到页面根节点时执行
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // 在组件被更新之前执行
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   // 它需要返回一个布尔值
  //   // return true
  // }

  // 在shouldComponentUpdate之后执行
  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  render() {
    return (
      <Fragment>
        <label htmlFor="mainInput">输入内容：</label>
        <input id="mainInput" type="text" value={this.state.inputVal} onChange={this.handleInputChange} />
        <button onClick={this.handleClick}>提交</button>
        <ul ref={ul => this.ul = ul}>{this.addTodoItem()}</ul>
        <Display textVal={this.state.inputVal} />
        {/* <Animation /> */}
        <AnimTest />
      </Fragment>
    );
  }

  // 组件更新完成之后会被执行
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

  // 在组件被挂载到页面根节点后执行
  componentDidMount() {
    // 可以在这里执行ajax请求
    // axios.get('./api/todolist')
    //   .then(res => {
    //     this.setState(() => ({
    //       list: [...res.data]
    //     }))
    //   })
    //   .catch(() => { console.log('error') })

    console.log('componentDidMount')
  }

}

export default TodoList;
