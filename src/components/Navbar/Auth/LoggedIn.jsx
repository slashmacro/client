import React, { useCallback } from 'react'
import { withRouter } from 'react-router-dom'

import Avatar from 'components/Shared/Avatar'
import Icon from 'components/Shared/Icon'

import firebase from 'config/firebase'

const LoggedIn = ({ history }) => {
  const handleLogout = useCallback(async e => {
    e.preventDefault()

    try {
      await firebase.auth().signOut()
      return history.push('/')
    } catch (err) {
      return console.error(err)
    }
  })

  return (
    <>
      <Icon icon="plus-duotone" />
      <Icon icon="bells-duotone" />
      <Avatar onClick={handleLogout} />
    </>
  )
}

export default withRouter(LoggedIn)
