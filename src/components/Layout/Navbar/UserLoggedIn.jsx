import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// materia-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

// actions
import { userLogout } from './actions'

const useStyles = makeStyles(() => ({
  avatar: {}
}))

const UserLoggedIn = ({ user, userLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  // helper function to close menu before logout
  const handleLogout = async () => {
    await handleClose()
    return userLogout()
  }

  const classes = useStyles()
  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <Avatar alt="User Name" src={user.photo} className={classes.avatar} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Typography>View Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <Typography>Log Out</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ userLogout }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoggedIn)
