import axios from 'axios'

import * as type from './actionTypes'

export function getAllMacros() {
  return async (dispatch, getState) => {
    dispatch({ type: type.GET_MACROS_INITIAL })
    return axios
      .get('/api/macros')
      .then(res =>
        dispatch({ type: type.GET_MACROS_SUCCESS, payload: res.data })
      )
      .catch(err => dispatch({ type: type.GET_MACROS_FAILURE, payload: err }))
  }
}
