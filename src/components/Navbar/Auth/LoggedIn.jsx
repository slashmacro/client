import React from 'react'

import Avatar from 'components/Shared/Avatar'
import Icon from 'components/Shared/Icon'

const LoggedIn = () => {
  const handleLogout = e => {
    e.preventDefault()
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
