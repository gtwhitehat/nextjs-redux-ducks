import typeToReducer from 'type-to-reducer'
import { pendingReducer, fulfilledReducer, rejectedReducer } from '../events'

let SET_USERNAME: string = 'fe/SET_USERNAME'

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
  [SET_USERNAME]: {
    PENDING: pendingReducer(),
    FULFILLED: fulfilledReducer(),
    REJECTED: rejectedReducer()
  },
}, initialState)


// Actions
export const setUserAction = ({ username = '' }) => (dispatch: any) => dispatch({
  type: SET_USERNAME,
  payload: Promise.resolve({ username }),
})