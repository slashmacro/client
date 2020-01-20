import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

// DUCKS
import { setUser } from 'ducks/user'

// UTILS
import { getUserSession } from 'utils/auth'

// ROUTE COMPONENTS
import Home from './Home'

const routes = ({ setUser }) => {
  getUserSession().then(user => console.log(user))

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default connect(null, { setUser })(routes)
