import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import testReducer from './reducers/testReducer'
import contentReducer from './reducers/content'

let middleware: any = [
  thunkMiddleware,
  promiseMiddleware
]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

// combine reducer
const reducers = combineReducers({
  user: testReducer,
  content: contentReducer
})

export const store = createStore(
  reducers,
  enhancer
)
