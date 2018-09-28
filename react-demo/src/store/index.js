// import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import reducer from '../reducer'
// import sagas from '../components/Header/store/sagas'

// const sagaMiddleware = createSagaMiddleware()

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancer = composeEnhancer(
//   applyMiddleware(sagaMiddleware)
// )
// const store = createStore(reducer, enhancer)

// sagaMiddleware.run(sagas)

// export default store

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from '../reducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancer(
  applyMiddleware(thunk)
)
const store = createStore(reducer, enhancer)

export default store