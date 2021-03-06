import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import appReducer from './app.reducer'
import createInitialStore
  from '../_data/createInitialStore'


const logger = createLogger({
  level:     'info',
  collapsed: true
})

export default createStore(
  appReducer,
  createInitialStore(),
  applyMiddleware(logger)
)
