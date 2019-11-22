import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import * as reducers from './ducks'

// devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
      })
    : compose

const middleware = applyMiddleware(thunk, promise)

export default createStore(
  combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    ...reducers,
  }),
  composeEnhancers(middleware)
)
