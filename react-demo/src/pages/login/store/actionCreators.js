import axios from 'axios'
import * as constants from './constants'

const toLogin = () => ({
  type: constants.CHANGE_LOGIN_STATUS,
  status: true
})

export const checkLogin = (acc, pwd) => {
  return dispatch => {
    axios.get('/api/login.json?account=' + acc + '&password=' + pwd)
      .then(res => {
        const result = res.data.data
        if (result) {
          dispatch(toLogin())
        } else {
          alert('登录失败')
        }
      })
  }
}

export const loginOut = () => ({
  type: constants.LOGIN_OUT,
  status: false
})