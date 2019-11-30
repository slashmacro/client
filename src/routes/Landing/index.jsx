import React from 'react'

import firebase from 'config/firebase'

const Landing = props => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <p>Landing Page</p>
      <button type="button" onClick={handleSubmit}>
        Create
      </button>
    </>
  )
}

export default Landing
