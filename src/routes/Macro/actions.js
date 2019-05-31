import axios from 'axios'

import * as type from './actionTypes'

export function getAllMacros() {
  return async (dispatch, getState) => {
    dispatch({ type: type.GET_MACROS_INITIAL })
    return axios
      .get('/api/macros')
      .then(res => {
        const sort = res.data.sort((a, b) => {
          return new Date(b.createdOn) - new Date(a.createdOn)
        })
        return dispatch({ type: type.GET_MACROS_SUCCESS, payload: sort })
      })
      .catch(err => dispatch({ type: type.GET_MACROS_FAILURE, payload: err }))
  }
}
