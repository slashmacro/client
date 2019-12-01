import React, { Component } from 'react'
import styled from 'styled-components'

import Input from 'components/Shared/Input'
import Button from 'components/Shared/Button'

class Form extends Component {
  static Input = Input
  static Button = Button
  render() {
    const { children } = this.props
    return <form {...this.props}>{children}</form>
  }
}

const StyledForm = styled(Form)`
  > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default StyledForm
