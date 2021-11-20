import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import { testReducer, fetchContentReducer } from './reducers/testReducer'

let middleware: any = [
  thunkMiddleware,
  promiseMiddleware
]

// combine reducer
const reducers = combineReducers({
  user: testReducer,
  content: fetchContentReducer
})

export const store = createStore(
  reducers,
  applyMiddleware(...middleware)
)
