import React from 'react'

import { MacrosProvider } from 'context/macros'

import firebase from 'config/firebase'

const Landing = props => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <MacrosProvider>
      <p>Landing Page</p>
      <button type="button" onClick={handleSubmit}>
        Create
      </button>
    </MacrosProvider>
  )
}

export default Landing
