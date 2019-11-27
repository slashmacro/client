import { useFirebase } from 'react-redux-firebase'

export default (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// ACTIONS
export const createMacro = values => async dispatch => {
  const firebase = useFirebase()
  await firebase.push('macros', values)
  return dispatch({ type: 'CREATE_MACRO', values })
}
