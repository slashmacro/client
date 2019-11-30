import React from 'react'
import styled from 'styled-components'

import Icon from 'components/Shared/Icon'

const Input = ({ className, label, icon, iconPosition, ...rest }) => {
  const { id } = rest
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}
      {icon && <Icon icon={icon} size="sm" />}
      <input id={id} {...rest} />
    </div>
  )
}

const StyledInput = styled(Input)`
  display: inline-grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 300px;

  input {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.offwhite};
    padding: 0;
  }

  span {
    background-color: ${({ theme }) => theme.colors.offwhite};
  }
`

export default StyledInput
