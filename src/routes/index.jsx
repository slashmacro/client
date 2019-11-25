import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Navbar from 'components/Navbar'
import Container from 'components/Shared/Container'

// routes
import Landing from './Landing'
import New from './New'

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
      <Container size="xl">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/new" component={New} />
        </Switch>
      </Container>
    </main>
  )
}

export default Routes
