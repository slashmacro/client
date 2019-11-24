import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Logo from 'components/Shared/Logo'
import Container from 'components/Shared/Container'
import Icon from 'components/Shared/Icon'

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <Container size="lg">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <Icon icon="plus" />
      </Container>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
}

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.offblack};
  padding: 0.5rem 2rem;
`

export default StyledNavbar
