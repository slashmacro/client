import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

// import our reducers
import * as reducers from 'ducks'

// init redux dev tools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose

// middleware
const middleware = applyMiddleware(thunk)

const firebaseConfig = {
  apiKey: "AIzaSyCM4NQ__N37d4v2a3R9RFkUsE1Lf9p6fYg",
  authDomain: "slashmacro-234703.firebaseapp.com",
  databaseURL: "https://slashmacro-234703.firebaseio.com",
  projectId: "slashmacro-234703",
  storageBucket: "slashmacro-234703.appspot.com",
  messagingSenderId: "516991684201",
  appId: "1:516991684201:web:cbb7d2969e1d4aa3a05cf8",
  measurementId: "G-RL7K5B6QDJ"
} // from Firebase Console
export const rfConfig = {} // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore through Firebase
firebase.firestore();

// Add reduxFirestore store enhancer to store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
  combineReducers(reducers),
  composeEnhancers(middleware)
)(createStore)

// Add Firebase to reducers
const rootReducer = combineReducers({
  firestore: firestoreReducer,
  ...reducers
})

// Create store with reducers and initial state
const initialState = {}
export default createStoreWithFirebase(rootReducer, initialState)