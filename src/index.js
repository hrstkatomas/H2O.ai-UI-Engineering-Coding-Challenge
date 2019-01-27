import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './_store/app.store'

import App from './app/App'

import './_styles/normalize.css'
import './_styles/fonts.scss'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
