import { put, takeEvery } from 'redux-saga/effects'
import { GET_SEARCH_INFO_LIST } from './constants'
import { getSearchInfoList } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  // yield console.log('sagas')
  // try {
  //   const res = yield axios.get('./headerList.json')
  //   const resource = res.data
  //   console.log(resource)
  //   const action = getSearchInfoList(resource.data)
  //   yield put(action)
  // } catch (e) {
  //   console.log(e)
  // }
  try {
    const res = yield axios.get('./headerList.json')
    console.log('>', res.data)
    const action = getSearchInfoList(res.data.data)
    console.log(action)
    yield put(action)
  } catch (e) {
    console.log(e)
  }
}

function* sagas() {
  yield takeEvery(GET_SEARCH_INFO_LIST, getInitList)
}

export default sagas