import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const Landing = props => {
  const firebase = useFirebase()
  const auth = useSelector(state => state?.firebase?.auth)

  const handleSubmit = e => {
    e.preventDefault()

    throw Error
    // const values = {
    //   title: 'Test',
    //   desc: '123',
    // }

    // return firebase
    //   .firestore()
    //   .collection('macros')
    //   .add(values)
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
