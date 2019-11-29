import React, { useState, useCallback } from 'react'

import firebase from 'config/firebase'

const Login = ({ history }) => {
  const initialState = {
    email: '',
    password: '',
    error: null,
  }
  const [form, setForm] = useState(initialState)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = useCallback(async e => {
    e.preventDefault()
    const { email, password } = e.target.elements

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)

      return history.push('/')
    } catch (err) {
      console.error(err)
    }
  })

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={form.email} onChange={onChange} />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={onChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default Login
