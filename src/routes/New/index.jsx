import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Form from 'components/Shared/Form'
import Card from 'components/Shared/Card'

import firebase from 'config/firebase'

const initialState = {
  title: '',
  description: '',
  macro: '',
  expansion: [],
  class: [],
}

const New = props => {
  const { history } = props
  const [state, setState] = useState(initialState)
  const onChange = e => setState({ ...state, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()

    const submit = new Promise((resolve, reject) => {
      try {
        firebase
          .firestore()
          .collection('macros')
          .add(state)
          .then(() => resolve())
        resolve()
      } catch (err) {
        return reject(err)
      }
    })

    return submit.then(() => history.push('/')).catch(err => console.err(err))
  }
  return (
    <Card>
      <Form onSubmit={onSubmit}>
        <Form.Input
          id="title"
          name="title"
          label="Title"
          onChange={onChange}
          fluid
        />
        <Form.Input
          id="description"
          name="description"
          label="Description"
          onChange={onChange}
          fluid
        />
        <Form.Input
          id="macro"
          name="macro"
          label="Macro"
          onChange={onChange}
          fluid
        />
        <Form.Button type="submit">Submit</Form.Button>
      </Form>
    </Card>
  )
}

New.propTypes = {
  history: PropTypes.object,
}

export default New
