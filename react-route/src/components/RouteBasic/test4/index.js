import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RenderOption3 = () => (
  <Router>
    <div>
      <ul>
        <ListItemLink to="/lesson" label="Lesson" />
        <ListItemLink to="/lesson-else" label="Other" />
      </ul>
      <Route path="/lesson" component={Lesson} />
      <Route path="/lesson-else" component={Other} />
    </div>
  </Router>
)

const ListItemLink = ({ to, label, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest} >{label}</Link>
      </li>
    )}
  />
)

const Lesson = () => <h2>lesson</h2>
const Other = () => <h2>other</h2>

export default RenderOption3