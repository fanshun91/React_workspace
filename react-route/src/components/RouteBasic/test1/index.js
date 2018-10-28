import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


///////////////////////////////////////////////////////
// There are 3 ways to render something with a <Route>
// <Route component >
// <Route render >
// <Route children >

const Example = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/news" component={NewsFeed} />
    </div>
  </Router>
)

const Home = () => <h2>Home page</h2>
const NewsFeed = () => <h2>NewsFeed page</h2>

export default Example