import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RenderOption1 = () => (
  <Router>
    <div>
      <Link to={"/user/" + fakeUsername} >User</Link>
      <Route path="/user/:username" component={User} />
    </div>
  </Router>
)

const User = ({ match }) => {
  return <h1>Hello, {match.params.username}</h1>
}

const fakeUsername = 'fanshun'

export default RenderOption1