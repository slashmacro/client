import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import logo from 'assets/slashmacro.svg'

const Logo = ({ className }) => {
  return <span className={className} title="Slash Macro Logo" />
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
}

const StyledLogo = styled(Logo)`
  display: inline-block;
  mask-image: url(${logo});
  mask-type: alpha;
  mask-repeat: no-repeat;
  mask-position: center;
  height: 32px;
  width: 32px;
  background-color: ${({ theme }) => theme.colors.legendary};
`

export default StyledLogo
