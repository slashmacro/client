import React from 'react'
import styled from 'styled-components'

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}

const StyledButton = styled(Button)``

export default StyledButton
