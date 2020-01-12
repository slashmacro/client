import update from 'immutability-helper'

const CONNECTED = Symbol('CONNECTED')
const DISCONNECTED = Symbol('DISCONNECTED')

const initialState = { connected: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case CONNECTED:
      return update(state, { $merge: { connected: true } })
    case DISCONNECTED:
      return update(state, { $merge: { connected: false } })
    default:
      return state
  }
}

// actions
export const socketConnected = () => ({ type: CONNECTED })
export const socketDisconnected = () => ({ type: DISCONNECTED })
