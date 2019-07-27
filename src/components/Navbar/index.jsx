import React from 'react'
import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logo from 'assets/slashmacro.svg'

const links = [
  { name: 'Browse', path: '/browse' },
  { name: 'Guides', path: '/guides' },
]

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavLink to="/">
        <Logo src={logo} />
      </NavLink>

      <ul>
        {links.map(link => (
          <li key={link.name}>
            <NavLink to={link.path} children={link.name} />
          </li>
        ))}
      </ul>
    </NavbarWrapper>
  )
}

export default Navbar

const NavbarWrapper = styled.nav`
  background-color: ${props => props.theme.colors.black};
  display: flex;
  align-items: stretch;
  padding: 0 2rem;

  ul {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    align-items: stretch;

    padding: 0;
    margin: 0;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      a {
        padding: 0 0.5rem;
      }
    }
  }
`

const Logo = styled(SVG)`
  margin-right: 2rem;
`
