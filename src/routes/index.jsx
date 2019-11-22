import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Navbar from 'components/Navbar'

// routes
import Landing from './Landing'

// auth
import Register from './Register'
import Login from './Login'

const Routes = () => {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </main>
  )
}

export default Routes
