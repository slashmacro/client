import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
}

const StyledContainer = styled(Container)`
  display: ${({ column, row }) => {
    if (column || row) return 'grid'
    return 'block'
  }};

  ${({ column, row }) => {
    let grid = []
    if (grid || row) {
      if (row) grid.push(`grid-template-rows: ${row};`)
      if (column) grid.push(`grid-template-columns: ${column};`)
      grid.push('grid-gap: 1rem;')
    }

    return grid.join('')
  }}

  position: relative;
  margin: 0 auto;
  padding: ${({ fluid }) => (fluid ? 0 : '0 2rem')};
  max-width: ${({ size }) => {
    switch (size) {
      case 'xs':
        return '320px'
      case 'sm':
        return '420px'
      case 'md':
        return '640px'
      case 'lg':
        return '960px'
      case 'xl':
        return '1024px'
      default:
        return '640px'
    }
  }};
`

StyledContainer.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  fluid: PropTypes.bool,
}

StyledContainer.defaultProps = {
  fluid: false,
  size: 'md',
}

export default StyledContainer
