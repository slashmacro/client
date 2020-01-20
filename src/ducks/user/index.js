import * as Sentry from '@sentry/browser'
import update from 'immutability-helper'

const SET_USER = Symbol('SET_USER')
const UNSET_USER = Symbol('SET_USER')

const initialState = {
  loggedIn: false,
  token: null,
  account: {},
  session: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { payload } = action
      const { email } = payload

      // capture user
      Sentry.configureScope(scope => scope.setUser({ email }))

      return update(state, {
        loggedIn: { $set: true },
        account: { $merge: { payload } },
      })
    }
    case UNSET_USER:
      return initialState
    default:
      return state
  }
}

// ACTIONS
export const setUser = payload => ({ type: SET_USER, payload })
export const unsetUser = () => ({ type: UNSET_USER })
