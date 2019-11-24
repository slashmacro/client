import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOut = () => {
  return (
    <>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Sing Up</NavLink>
    </>
  )
}

export default LoggedOut
