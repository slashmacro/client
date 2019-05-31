import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

// components
import Navbar from 'components/Layout/Navbar'

// routes
import LandingPage from './Landing'

// actions
import { getUserSession } from 'components/Layout/Navbar/actions'

const Routes = ({ getUserSession }) => {
  useEffect(() => {
    getUserSession()
  }, [getUserSession])
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

const mapStateToProps = state => ({})

const mapDispatchToprops = {
  getUserSession
}

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Routes)
