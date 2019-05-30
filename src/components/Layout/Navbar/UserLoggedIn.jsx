import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

// materia-ui
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

// actions
import { userLogout } from './actions'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}))

const UserLoggedIn = ({ user, userLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = e => setAnchorEl(e.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const [model, setModel] = useState(false)
  const handleModalOpen = () => setModel(true)
  const handleModalClose = () => setModel(false)

  // helper function to close menu before logout
  const handleLogout = async () => {
    await handleClose()
    return userLogout()
  }

  const [form, setForm] = useState({ title: '', macro: '' })
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('/api/macros', form)
      .then(res => handleClose())
      .catch(err => console.error(err))
  }
  const handleChange = e => {
    const { name, value } = e.target
    return setForm({ ...form, [name]: value })
  }

  const classes = useStyles()
  return (
    <>
      <Button onClick={handleModalOpen}>New Macro</Button>
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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={model}
        onClose={handleModalClose}
      >
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            New Macro
            <form onSubmit={handleSubmit}>
              <TextField
                id="macro-title"
                label="Title"
                type="text"
                name="title"
                autoComplete="off"
                margin="normal"
                variant="outlined"
                fullWidth
                value={form.title}
                onChange={handleChange}
              />
              <TextField
                id="macro-macro"
                label="Macro"
                type="text"
                name="macro"
                autoComplete="off"
                margin="normal"
                variant="outlined"
                multiline
                fullWidth
                value={form.macro}
                onChange={handleChange}
              />
              <Button type="submit" fullWidth>
                Submit
              </Button>
            </form>
          </Typography>
        </div>
      </Modal>
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
