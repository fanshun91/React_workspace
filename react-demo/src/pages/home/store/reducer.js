import { fromJS } from 'immutable'
import {
  CHANGE_HOME_DATA,
  ADD_LIST_ITEM,
  TOGGLE_BACKTOP_SHOW
} from './constants'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  authorList: [],
  articlePage: 1,
  showBackTop: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    authorList: fromJS(action.authorList)
  })
}

const addListItem = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

const toggleBackTop = (state, action) => {
  return state.set(
    'showBackTop',
    action.show
  )
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case ADD_LIST_ITEM:
      return addListItem(state, action)
    case TOGGLE_BACKTOP_SHOW:
      return toggleBackTop(state, action)
    default:
      return state
  }
}