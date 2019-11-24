import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { importAll } from 'utils/imports'

const icons = importAll(require.context('./icons', false, /\.svg$/))
const keys = Object.keys(icons)
const names = keys.map(key => key.replace(/\.[^/.]+$/, ''))

const Icon = ({ className }) => <span className={className} />

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
  mask-image: url(${({ icon }) => icons[keys.find(key => key.includes(icon))]});
  mask-type: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  height: ${({ size }) => handleSize(size)};
  width: ${({ size }) => handleSize(size)};
  background-color: white;
`

StyledIcon.propTypes = {
  icon: PropTypes.oneOf(names).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
}

StyledIcon.defaultProps = {
  size: 'md',
}

export default StyledIcon
