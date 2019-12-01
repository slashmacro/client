import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { importAll } from 'utils/imports'

const icons = importAll(require.context('./icons', false, /\.svg$/))
const keys = Object.keys(icons)
const names = keys.map(key => key.replace(/\.[^/.]+$/, ''))

const Icon = props => {
  const { children, onClick, to } = props
  if (to) return <Link {...props}>{children}</Link>
  if (onClick) return <button {...props}>{children}</button>
  return <span {...props} />
}

Icon.propTypes = {
  className: PropTypes.string.isRequired,
}

function handleSize(size) {
  switch (size) {
    case 'sm':
      return '16px'
    case 'md':
      return '20px'
    case 'lg':
      return '24px'
    case 'xl':
      return '32px'
    default:
      return '20px'
  }
}

const StyledIcon = styled(Icon)`
  display: inline-block;
  position: relative;
  mask-image: url(${({ icon }) => icons[keys.find(key => key.includes(icon))]});
  mask-type: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: ${({ size }) => handleSize(size)};
  height: ${({ size }) => handleSize(size)};
  width: ${({ size }) => handleSize(size)};
  background-color: white;

  ${({ to, onClick, size }) => {
    let calcSize = handleSize(size)
    return `
      &:hover {
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          height: ${calcSize};
          width: ${calcSize};
          border-radius: 50%;
          background-color: white;
          z-index: 999999999;
        }
      }
    `
  }}
`

StyledIcon.propTypes = {
  icon: PropTypes.oneOf(names).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

StyledIcon.defaultProps = {
  size: 'md',
}

export default StyledIcon
