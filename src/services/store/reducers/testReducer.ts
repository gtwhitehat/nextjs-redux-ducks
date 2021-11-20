import typeToReducer from 'type-to-reducer'
import { combineReducers } from 'redux'


let SET_USERNAME: string = 'fe/SET_USERNAME'
let FETCH_CONTENT: string = 'fe/FETCH_CONTENT'

interface User {
  response: object,
  status?: boolean
}

const initialState = {};

// reducers
const pendingReducer: any = () => (prevState: any): object => ({
  status: true,
  response: prevState.data,
})

const fulfilledReducer: any = () => (_: any, { payload }: any): object => ({
  status: false,
  response: payload,
})

const rejectedReducer: any = () => (prevState: any, { payload = {} }): object => ({
  status: false,
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


export {
  testReducer,
  fetchContentReducer
}