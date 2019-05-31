import * as type from './actionTypes'

const initialState = {
  loading: false,
  data: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_MACROS_INITIAL:
      return { ...state, loading: true }
    case type.GET_MACROS_FAILURE:
      return { ...state, loading: false }
    case type.GET_MACROS_SUCCESS:
      return { ...state, loading: false, data: action.payload }
    default:
      return state
  }
}

export default reducer
