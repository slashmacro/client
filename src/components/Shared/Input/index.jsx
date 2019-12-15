import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = ({ label, id, name, className, ...rest }) => {
  return (
    <div className={className}>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input name={name} id={id} {...rest} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const StyledInput = styled(Input)``

export default StyledInput
