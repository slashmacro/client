import React, { useState } from 'react'
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import { Button, Input } from 'components/Shared'
import { auth } from 'firebase'

const Landing = props => {
  const firestore = useFirestore()
  useFirestoreConnect([{ collection: 'macros' }])
  const macros = useSelector(state => state.firestore.ordered.macros)
  const auth = useSelector(state => state.firebase.auth)

  const [form, setForm] = useState({})
  const onChange = ({ target }) => {
    return setForm({ ...form, [target.name]: target.value })
  }

  const onSubmit = e => {
    e.preventDefault()

    const data = {
      createdBy: auth.uid,
      ...form,
    }

    return firestore.collection('macros').add(data)
  }

  return (
    <div>
      <p>landing</p>

      <h2>Create Macro</h2>
      <form onSubmit={onSubmit}>
        <Input
          name="title"
          label="title"
          id="title"
          value={form.title}
          onChange={onChange}
        />
        <Input
          name="description"
          label="description"
          id="description"
          value={form.description}
          onChange={onChange}
        />
        <Input
          name="macro"
          label="macro"
          id="macro"
          value={form.macro}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </form>

      <h2>Macros</h2>
      {macros?.map(macro => {
        return (
          <div key={macro.id}>
            <h3>{macro.title}</h3>
            <p>{macro.description}</p>
            <code>
              <pre>{macro.macro}</pre>
            </code>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Landing
