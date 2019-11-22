import React, { useState } from 'react'

import firebase from 'config/firebase'

const Register = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [form, setForm] = useState(initialState)
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    const { email, password } = form

    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => console.error(err))
  }

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

export default Register
