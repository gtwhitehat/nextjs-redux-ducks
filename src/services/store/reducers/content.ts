import typeToReducer from 'type-to-reducer'
import { fetchContentRequest } from '../../apis/request'
import { pendingReducer, fulfilledReducer, rejectedReducer } from '../events'

let FETCH_CONTENT: string = 'fe/FETCH_CONTENT'

interface User {
  response: object,
  isPending?: boolean
}

const initialState: User = {
  response: {},
  isPending: false
};

// reducers
export default typeToReducer({
  [FETCH_CONTENT]: {
    PENDING: pendingReducer(),
    FULFILLED: fulfilledReducer(),
    REJECTED: rejectedReducer()
  },
}, initialState)

// Actions
export const fetchContentAction = () => (dispatch: any) => dispatch({
  type: FETCH_CONTENT,
  payload: fetchContentRequest(),
})
