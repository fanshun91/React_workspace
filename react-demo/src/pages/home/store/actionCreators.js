import axios from 'axios'
import { fromJS } from 'immutable'
import {
  CHANGE_HOME_DATA,
  ADD_LIST_ITEM,
  TOGGLE_BACKTOP_SHOW
} from './constants'

const changeHomeData = result => ({
  type: CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  authorList: result.authorList
})

const addListItem = (list, nextPage) => ({
  type: ADD_LIST_ITEM,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return dispatch => {
    axios.get('./api/home.json')
      .then(res => {
        const result = res.data.data
        const action = changeHomeData(result)
        dispatch(action)
      })
  }
}

export const getMoreListItem = (page) => {
  return dispatch => {
    axios.get('/api/homeAddList.json?page=' + page)
      .then(res => {
        const result = res.data.data
        dispatch(addListItem(result, page + 1))
      })
  }
}

export const toggleBackTop = show => ({
  type: TOGGLE_BACKTOP_SHOW,
  show
})