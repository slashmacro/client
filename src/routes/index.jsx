import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

// context
import { AuthProvider, AuthContext } from 'context/auth'

// routes
import Landing from './Landing'

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
      <Main />
    </AuthProvider>
  )
}

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </main>
  )
}

export default Routes
