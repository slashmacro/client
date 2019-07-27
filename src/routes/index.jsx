import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Navbar from 'components/Navbar'

// routes
import LandingPage from './Landing'

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
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </main>
  )
}

export default Routes
