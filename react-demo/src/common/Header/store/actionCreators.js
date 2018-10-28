import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

const getList = data => ({
  type: constants.GET_SEARCH_INFO_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
})

export const getSearchFocused = () => ({
  type: constants.SEARCH_FOCUSED
})

export const getSearchBlured = () => ({
  type: constants.SEARCH_BLURED
})

export const getMouseEntered = () => ({
  type: constants.MOUSE_ENTER
})

export const getMouseLeaved = () => ({
  type: constants.MOUSE_LEAVE
})

export const getChangePage = page => ({
  type: constants.CHANGE_PAGE,
  page
})

// export const getSearchInfoList = data => ({
//   type: constants.GET_SEARCH_INFO_LIST,
//   data: fromJS(data)
// })

export const getSearchInfoList = () => {
  return dispatch => {
    axios.get('/api/headerList.json')
      .then(res => {
        // console.log('>', res.data)
        const data = res.data
        const action = getList(data.data)
        dispatch(action)
      })
      .catch(() => {
        console.log('error')
      })
  }
}

// export const getSearchInfoList = data => {
//   console.log(data)
//   return {
//     type: constants.GET_SEARCH_INFO_LIST,
//     data
//   }
// }