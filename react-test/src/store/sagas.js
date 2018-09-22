import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { getInitList } from './actionCreators'
import axios from 'axios'

function* getTodoList() {
  try {
    const res = yield axios.get('./todolist.json')
    const action = getInitList(res.data)
    yield put(action)
  } catch (e) {
    console.log(e)
  }
}

function* sagas() {
  yield takeEvery(GET_INIT_LIST, getTodoList)
}

export default sagas