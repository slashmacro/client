/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import { Provider } from 'react-redux'

import store from 'store'

import 'normalize.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://8d2a51bcbb9d4ddb9f204499635200b7@sentry.io/1835504',
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
