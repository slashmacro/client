import { isObjectEmpty } from 'helpers'
import {
  GET_SESSION_INITIAL,
  GET_SESSION_FAILURE,
  GET_SESSION_SUCCESS,
  LOGIN_INITIAL,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_INITIAL,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS
} from './actionTypes'

// define our reducers initial state
const initialState = {
  isLoggedIn: false,
  loading: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSION_INITIAL:
      return { ...state, loading: true }
    case GET_SESSION_FAILURE:
      return { ...state, loading: false }
    case GET_SESSION_SUCCESS:
      if (isObjectEmpty(action.payload)) return { ...state, loading: false }
      return { ...state, loading: false, isLoggedIn: true, ...action.payload }
    case LOGIN_INITIAL:
      return { ...state, loading: true }
    case LOGIN_FAILURE:
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true, ...action.payload }
    case LOGOUT_INITIAL:
      return { ...state, loading: true }
    case LOGOUT_FAILURE:
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, isLoggedIn: false }
    default:
      return state
  }
}

export default reducer
