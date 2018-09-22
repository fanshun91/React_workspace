import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancers = composeEnhancers(
  applyMiddleware(thunk)
)

const store = createStore(reducer, enhancers)

export default store