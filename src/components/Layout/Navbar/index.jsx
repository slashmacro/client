import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

// actions
import { getUserSession } from './actions'

// child components
import UserLoggedOut from './UserLoggedOut'
import UserLoggedIn from './UserLoggedIn'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  leftIcon: {
    fontSize: '1rem',
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = ({ getUserSession, user }) => {
  const classes = useStyles()
  useEffect(() => {
    getUserSession()
  }, [getUserSession])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            slashmacro
          </Typography>
          {user.isLoggedIn ? <UserLoggedIn /> : <UserLoggedOut />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUserSession }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
