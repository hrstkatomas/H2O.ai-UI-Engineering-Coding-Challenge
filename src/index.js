import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './_store/app.store'

import './_styles/normalize.css'


ReactDOM.render(
  <Provider store={store}>
    <h1>Hello H2O</h1>
  </Provider>,
  document.getElementById('root'),
)
