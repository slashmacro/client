import React from 'react'

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
