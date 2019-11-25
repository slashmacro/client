import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'

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
        resolve()
      } catch (err) {
        return reject(err)
      }
    })

    return submit.then(() => history.push('/')).catch(err => console.err(err))
  }
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" id="title" value={state.title} onChange={onChange} />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        id="description"
        value={state.description}
        onChange={onChange}
      />
      <label htmlFor="macro">Macro</label>
      <input name="macro" id="macro" value={state.macro} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

New.propTypes = {
  history: PropTypes.object,
}

export default New
