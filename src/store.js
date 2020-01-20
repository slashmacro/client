import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from 'ducks'

const rootReducer = combineReducers({ ...reducers })

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
      })
    : compose
const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, composeEnhancers(middleware))

export default store
