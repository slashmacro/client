import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

// context
import { AuthProvider, AuthContext } from 'context/auth'

// components
import Navbar from 'components/Navbar'
import Container from 'components/Shared/Container'

// routes
import Landing from './Landing'
import New from './New'

// auth
import Register from './Register'
import Login from './Login'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props => {
        if (currentUser) return <RouteComponent {...props} />
        return <Route path="/login" />
      }}
    />
  )
}

const Routes = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Main />
    </AuthProvider>
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
          <PrivateRoute exact path="/new" component={New} />
        </Switch>
      </Container>
    </main>
  )
}

export default Routes
