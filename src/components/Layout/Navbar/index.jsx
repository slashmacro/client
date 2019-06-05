import React from 'react'
import { connect } from 'react-redux'

// material-ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

// child components
import UserLoggedOut from './UserLoggedOut'
import UserLoggedIn from './UserLoggedIn'
import LogoIcon from './Logo'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  icon: {
    fontSize: '2.5rem'
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = ({ user }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <div className={classes.title}>
            <IconButton size="small">
              <LogoIcon className={classes.icon} />
            </IconButton>
          </div>
          {user.isLoggedIn ? <UserLoggedIn /> : <UserLoggedOut />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
