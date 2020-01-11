import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import * as reducers from 'ducks'

const rootReducer = combineReducers({ ...reducers })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk)

const store = createStore(rootReducer, composeEnhancers(middleware))

export default store
