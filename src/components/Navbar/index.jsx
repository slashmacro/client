import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'

import { Button, Input } from 'components/Shared'

const Navbar = ({ className, ...rest }) => {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)

  const [login, setLogin] = useState({})
  const onChange = e => setLogin({ ...login, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    const { email, password } = login
    return firebase.login({ email, password })
  }

  const logout = () => firebase.logout()

  return (
    <div className={className}>
      <p>slashmacro</p>
      {auth.isEmpty ? (
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            label="email"
            id="email"
            type="email"
            onChange={onChange}
          />
          <Input
            name="password"
            label="password"
            id="password"
            type="password"
            onChange={onChange}
          />
          <Button type="submit">submit</Button>
        </form>
      ) : (
        <Button type="button" onClick={logout}>
          logout
        </Button>
      )}
    </div>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

const StyledNavbar = styled(Navbar)``

export default StyledNavbar
