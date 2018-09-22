import React from 'react'

import 'antd/dist/antd.css'
import {
  Input,
  Button,
  List
} from 'antd'

const UI = props => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder="add todo"
          style={{ width: '300px', marginRight: '8px' }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleSubmit}>添加</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={props.handleDeleteItem.bind(this, index)}>{item}</List.Item>)}
      />
    </div>
  )
}

export default UI