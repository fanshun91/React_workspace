import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN_STATUS:
    case constants.LOGIN_OUT:
      return state.set('login', action.status)
    default:
      return state
  }
}