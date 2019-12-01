import React, { useEffect, useState } from 'react'

import firebase from 'config/firebase'

export const MacrosContext = React.createContext()

export const MacrosProvider = ({ children }) => {
  const [macros, setMacros] = useState(null)

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('macros')
      .onSnapshot(macros => setMacros(macros.docs.map(doc => doc.data())))

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <MacrosContext.Provider value={{ macros }}>
      {children}
    </MacrosContext.Provider>
  )
}
