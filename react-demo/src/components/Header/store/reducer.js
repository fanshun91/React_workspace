import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 0
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUSED:
      return state.set('focused', true)
    case constants.SEARCH_BLURED:
      return state.set('focused', false)
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    case constants.GET_SEARCH_INFO_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    default:
      return state
  }
}

// export default (state = defaultState, action) => {
//   if (action.type === constants.SEARCH_FOCUSED) {
//     // return {
//     //   focused: true
//     // }

//     // use immutable.js
//     return state.set('focused', true)
//   }

//   if (action.type === constants.SEARCH_BLURED) {
//     return state.set('focused', false)
//   }

//   if (action.type === constants.GET_SEARCH_INFO_LIST) {
//     return state.set('list', action.data)
//   }

//   return state
// }