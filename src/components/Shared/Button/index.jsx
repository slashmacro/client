import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button as ReaButton } from 'reakit/Button'

const Button = ({ children, ...rest }) => {
  return <ReaButton {...rest}>{children}</ReaButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledButton = styled(Button)``

export default StyledButton
