import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'

const Login = () => {
  const firebase = useFirebase()

  const initialState = {
    email: '',
    password: '',
    error: null,
  }
  const [form, setForm] = useState(initialState)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    const { email, password } = form

    return firebase.login({ email, password }).catch(err => console.error(err))
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

export default Login
