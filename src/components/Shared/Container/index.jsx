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
  display: block;
  position: relative;
  margin: 0 auto;
  width: 100%;
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
        return '1040px'
      default:
        return '640px'
    }
  }};
`

StyledContainer.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

StyledContainer.defaultProps = {
  size: 'md',
}

export default StyledContainer