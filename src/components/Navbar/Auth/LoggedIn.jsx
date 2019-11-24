import React from 'react'
import { useFirebase } from 'react-redux-firebase'

import Avatar from 'components/Shared/Avatar'
import Icon from 'components/Shared/Icon'

const LoggedIn = () => {
  const firebase = useFirebase()
  const handleLogout = e => {
    e.preventDefault()
    return firebase.logout()
  }

  return (
    <>
      <Icon icon="plus-duotone" />
      <Icon icon="bells-duotone" />
      <Avatar onClick={handleLogout} />
    </>
  )
}

export default LoggedIn
