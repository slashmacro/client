import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Avatar = props => {
  const { className } = props
  return <span {...props} className={className} />
}

Avatar.propTypes = {
  className: PropTypes.string.isRequired,
}

const StyledAvatar = styled(Avatar)`
  display: inline-block;
  position: relative;

  ${({ src, theme }) => {
    if (src) return `background-image: url(${src}); background-size: cover;`
    return `background-color: ${theme.colors.offwhite};`
  }}

  border-radius: 50%;
  height: 32px;
  width: 32px;
`

StyledAvatar.propTypes = {
  src: PropTypes.string,
}

StyledAvatar.defaultProps = {}

export default StyledAvatar
