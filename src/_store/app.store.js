import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import appReducer from './app.reducer'


const logger = createLogger({
  level:     'info',
  collapsed: true
})

export default createStore(
  appReducer,
  undefined,
  applyMiddleware(logger)
)
