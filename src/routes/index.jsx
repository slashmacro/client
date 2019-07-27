import React from 'react'
import { Route, Switch } from 'react-router-dom'

// routes
import LandingPage from './Landing'

const Routes = () => {
  return (
    <>
      <Main />
    </>
  )
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </main>
  )
}

export default Routes
