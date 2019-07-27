import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// import our reducers
import * as reducers from 'ducks'

// init redux dev tools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose

// middleware
const middleware = applyMiddleware(thunk)

export default createStore(
  combineReducers(reducers),
  composeEnhancers(middleware)
)
