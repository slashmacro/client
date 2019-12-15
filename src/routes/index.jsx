import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Navbar from 'components/Navbar'

// routes
import Landing from './Landing'
import NotFound from './NotFound'

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
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default Routes
