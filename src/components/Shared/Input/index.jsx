import React from 'react'
import styled from 'styled-components'

import Icon from 'components/Shared/Icon'

const Input = ({ className, label, icon, iconPosition, fluid, ...rest }) => {
  const { id } = rest
  return (
    <div className={className}>
      {label && <label htmlFor={id}>{label}</label>}

      <div>
        {icon && <Icon icon={icon} size="sm" />}
        <input id={id} {...rest} />
      </div>
    </div>
  )
}

const StyledInput = styled(Input)`
  label {
    display: block;
    margin: 0 0 0.5rem 0.5rem;
    font-weight: 600;
    font-size: 12px;
  }

  > div {
    display: ${({ fluid }) => (fluid ? 'grid' : 'inline-grid')};
    grid-auto-flow: column;
    grid-auto-columns: auto 1fr;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 4px;
    padding: 0.5rem;

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
  }
`

export default StyledInput
