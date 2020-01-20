import React, { useState } from 'react'

// UTILS
import { register, login } from 'utils/auth'

const initialState = {
  email: '',
  password: '',
}

const Home = props => {
  const [state, setState] = useState(initialState)
  const { email, password } = state

  const handleChange = e => {
    const { name, value } = e.target
    return setState({ ...state, [name]: value })
  }

  const handleLogin = async e => {
    e.preventDefault()
    await login(state)
    return setState(initialState)
  }

  const handleSignUp = async e => {
    e.preventDefault()
    await register(state)
    return setState(initialState)
  }

  return (
    <>
      <h2>Login</h2>
      <form autoComplete="false" onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <h2>Sign up</h2>
      <form autoComplete="false" onSubmit={handleSignUp}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Home
