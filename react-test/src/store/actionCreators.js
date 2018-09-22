import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  INIT_LIST,
  GET_INIT_LIST
} from './actionTypes'


export const getInputValueChange = value => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItem = () => ({
  type: ADD_TODO_LIST
})

export const getDeleteTodoItem = index => ({
  type: DELETE_TODO_LIST,
  deleteKey: index
})

export const getInitList = data => ({
  type: INIT_LIST,
  data
})

// 使用了redux-thunk之后, action返回一个函数
// export const getTodoList = () => {
//   return dispatch => {
//     axios.get('./todolist.json')
//       .then(res => {
//         const data = res.data
//         const action = getInitList(data)
//         dispatch(action)
//       })
//   }
// }

// for redux-saga
export const getTodoList = () => ({
  type: GET_INIT_LIST
})