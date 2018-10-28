import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// convienient inline rendering
// <Route path="/home" render={() => <div>Home</div>} /> 

const Test = () => <h2>Wrapping/Composing</h2>

const TestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} />}
  />
)

const RenderOption2 = () => (
  <Router>
    <div>
      <Link to="/cool">Test</Link>
      <TestRoute path="/cool" component={Test} />
    </div>
  </Router>
)

export default RenderOption2