import React, { useState } from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import { Button, Input } from 'components/Shared'

const Landing = props => {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)

  const [login, setLogin] = useState({})
  const onChange = e => setLogin({ ...login, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    const { email, password } = login
    return firebase.login({ email, password })
  }

  const logout = () => firebase.logout()

  return (
    <div>
      <p>landing</p>

      {auth.isEmpty ? (
        <form onSubmit={handleSubmit}>
          <Input
            name="email"
            label="email"
            id="email"
            type="email"
            onChange={onChange}
          />
          <Input
            name="password"
            label="password"
            id="password"
            type="password"
            onChange={onChange}
          />
          <Button type="submit">submit</Button>
        </form>
      ) : (
        <Button type="button" onClick={logout}>
          logout
        </Button>
      )}
    </div>
  )
}

export default Landing
