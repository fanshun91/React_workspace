import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/Header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import ToWrite from './pages/write'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route
            path='/login'
            exact
            component={Login}
          />
          <Route
            path='/'
            exact
            component={Home}
          />
          <Route
            path='/write'
            exact
            component={ToWrite}
          />
          <Route
            path='/detail/:id'
            exact
            component={Detail}
          />
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App