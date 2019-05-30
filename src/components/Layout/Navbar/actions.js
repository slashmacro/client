import axios from 'axios'

// action types
import {
  GET_SESSION_INITIAL,
  GET_SESSION_FAILURE,
  GET_SESSION_SUCCESS,
  LOGOUT_INITIAL,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS
} from './actionTypes'

export function getUserSession() {
  return async (dispatch, getState) => {
    dispatch({ type: GET_SESSION_INITIAL })
    await axios
      .get('/auth/session')
      .then(res => dispatch({ type: GET_SESSION_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_SESSION_FAILURE, payload: err }))
  }
}

export function userLogout() {
  return async (dispatch, getState) => {
    dispatch({ type: LOGOUT_INITIAL })
    await axios
      .get('/auth/logout')
      .then(res => dispatch({ type: LOGOUT_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: LOGOUT_FAILURE, payload: err }))
  }
}
