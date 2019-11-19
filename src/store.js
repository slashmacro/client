import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

import reducers from 'ducks'

const fbConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// Initialize firebase instance
try {
  firebase.initializeApp(fbConfig)
} catch (err) {
  console.log('Error connecting to firebase', err)
}

// Add firebase to reducers
const rootReducer = combineReducers({
  ...reducers,
  firebase: firebaseReducer,
})

// devtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
      })
    : compose

const middleware = applyMiddleware(thunk)

// Create store with reducers and initial state
const store = createStore(rootReducer, composeEnhancers(middleware))

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
}

export default store
