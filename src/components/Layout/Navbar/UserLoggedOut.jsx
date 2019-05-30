import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import pt from 'popup-tools'

// material-ui
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

// actions
import { getUserSession } from 'components/Layout/Navbar/actions'

const useStyle = makeStyles(theme => ({
  leftIcon: {
    marginRight: theme.spacing(1)
  }
}))

const UserLoggedOut = ({ getUserSession }) => {
  const classes = useStyle()
  const handleGoogleLogin = () => {
    const url = 'http://localhost:8000/auth/google'
    const options = {
      width: 480,
      height: 640
    }
    pt.popup(url, 'Google Connect', options, (err, user) => {
      if (err) return console.error(err)
      return getUserSession()
    })
  }

  return (
    <Button onClick={handleGoogleLogin}>
      <Icon
        className={`${classes.leftIcon} fab fa-google`}
        fontSize="inherit"
      />
      Login / Register
    </Button>
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
)(UserLoggedOut)
