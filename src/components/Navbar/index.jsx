import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Logo from 'components/Shared/Logo'
import Container from 'components/Shared/Container'

import { LoggedIn, LoggedOut } from './Auth'

const links = [
  { name: 'Guides', url: '/guides' },
  { name: 'Streams', url: '/streams' },
]

const Navbar = ({ className }) => {
  const auth = useSelector(state => state.firebase.auth)
  const { isEmpty } = auth

  return (
    <nav className={className}>
      <Container size="xl" fluid>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <section name="navigation">
          {links.map(({ name, url }) => {
            return (
              <NavLink key={name} to={url}>
                {name}
              </NavLink>
            )
          })}
        </section>
        <section name="actions">
          {isEmpty ? <LoggedOut /> : <LoggedIn />}
        </section>
      </Container>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired,
}

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.offblack};
  padding: 1rem 2rem;

  > * {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: flex-start;

    > * {
      display: inline-grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
      grid-auto-columns: min-content;
      align-items: center;
    }
  }
`

export default StyledNavbar
