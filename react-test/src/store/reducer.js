import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  INIT_LIST
} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接受state，但不能修改state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    // 深拷贝一份state
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.deleteKey, 1)
    return newState
  }

  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = [...action.data]
    return newState
  }

  return state
}