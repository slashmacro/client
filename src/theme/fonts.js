import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  a {
    color: ${props => props.theme.colors.white};
    text-decoration: none;
  }
`