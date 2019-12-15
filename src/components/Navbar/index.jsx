import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Navbar = ({ className, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)

  return (
    <div className={className}>
      <p>slashmacro</p>
      {auth.isEmpty ? <p>logged in</p> : <p>logged out</p>}
    </div>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
}

const StyledNavbar = styled(Navbar)``

export default StyledNavbar
