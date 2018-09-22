// import React, { Component } from 'react'
import React from 'react'

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// class IndexUI extends Component {
//   render() {
//     return (
//       <div style={{ margin: '10px' }}>
//         <div>
//           <Input
//             style={{ width: '300px', marginRight: '8px' }}
//             placeholder="add todo"
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button type="primary" onClick={this.props.handleClick}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={index => this.props.handleDeleteItem(index)}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

// 替换为无状态组件
const IndexUI = props => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          style={{ width: '300px', marginRight: '8px' }}
          placeholder="add todo"
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleClick}>提交</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => props.handleDeleteItem(index)}>{item}</List.Item>)}
      />
    </div>
  )
}

export default IndexUI