import React from 'react'
import styled from 'styled-components'

const Card = ({ children, title, ...rest }) => {
  return <div {...rest}>{children}</div>
}

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.offblack};
  border-radius: 4px;
  padding: 0.5rem;
`

export default StyledCard
