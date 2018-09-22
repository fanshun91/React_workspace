import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getInputChange,
  getAddItem,
  getDeleteItem
} from './action/actionCreators'

// class TodoList extends Component {

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.props.inputValue}
//           onChange={this.props.handleInputValue}
//         />
//         <button onClick={this.props.handleSubmit}>添加</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return <li key={item} onClick={() => this.props.handleDeleteItem(index)}>{item}</li>
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

const TodoList = props => {
  const {
    inputValue,
    list,
    handleInputValue,
    handleSubmit,
    handleDeleteItem
  } = props

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
      />
      <button onClick={handleSubmit}>添加</button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={item} onClick={() => handleDeleteItem(index)}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  inputValue: state.inputValue,
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  handleInputValue(e) {
    const action = getInputChange(e.target.value)
    dispatch(action)
  },

  handleSubmit() {
    const action = getAddItem()
    dispatch(action)
  },

  handleDeleteItem(index) {
    const action = getDeleteItem(index)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)