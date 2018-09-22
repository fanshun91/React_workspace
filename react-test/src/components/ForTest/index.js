import React, { Component } from 'react'
import store from '../../store/test'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class Tester extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)

    store.subscribe(this.handleStateChange)
  }

  handleStateChange() {
    this.setState(store.getState())
  }

  handleChange(e) {
    const action = {
      type: 'change',
      value: e.target.value
    }

    store.dispatch(action)
  }
  handleClick() {
    const action = {
      type: 'submit'
    }

    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <div>
          <Input placeholder="add todo" value={this.state.inputValue} onChange={this.handleChange} />
          <Button onClick={this.handleClick}>提交</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default Tester