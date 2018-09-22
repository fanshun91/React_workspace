import {
  INPUT_VALUE_CHANGE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_TODO_LIST
} from './actionTypes'

import axios from 'axios'

export const getInputValueAction = value => ({
  type: INPUT_VALUE_CHANGE,
  value
})

export const getAddTodoAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getInitTodoListAction = data => ({
  type: INIT_TODO_LIST,
  data
})

export const getTodoList = () => {
  return dispatch => {
    axios.get('./todolist.json')
      .then(res => {
        const data = res.data
        const action = getInitTodoListAction(data)
        dispatch(action)
      })
  }
}