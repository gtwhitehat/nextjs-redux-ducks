import typeToReducer from 'type-to-reducer'
import { combineReducers } from 'redux'
import { fetchContentRequest } from '../../apis/request'


let SET_USERNAME: string = 'fe/SET_USERNAME'
let FETCH_CONTENT: string = 'fe/FETCH_CONTENT'

interface User {
  response: object,
  isPending?: boolean
}

const initialState = {};

// reducers
const pendingReducer: any = () => (prevState: any): object => ({
  isPending: true,
  response: prevState.data,
})

const fulfilledReducer: any = () => (_: any, { payload }: any): object => ({
  isPending: false,
  response: payload,
})

const rejectedReducer: any = () => (prevState: any, { payload = {} }): object => ({
  isPending: false,
  response: prevState.data,
  errorMessage: payload,
})

const testReducer = typeToReducer({
  [SET_USERNAME]: {
    PENDING: pendingReducer(),
    FULFILLED: fulfilledReducer(),
    REJECTED: rejectedReducer()
  },
}, initialState)

const fetchContentReducer = typeToReducer({
  [FETCH_CONTENT]: {
    PENDING: pendingReducer(),
    FULFILLED: fulfilledReducer(),
    REJECTED: rejectedReducer()
  },
}, initialState)


// Actions
export const setUser = ({ username = '' }) => (dispatch: any) => dispatch({
  type: SET_USERNAME,
  payload: Promise.resolve({ username }),
})

export const fetchContentAction = () => (dispatch: any) => dispatch({
  type: FETCH_CONTENT,
  payload: fetchContentRequest(),
})


export {
  testReducer,
  fetchContentReducer
}