import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable no-underscore-dangle
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(rootReducer, enhancer)

export default store
