// pending
export const pendingReducer: any = () => (prevState: any): object => ({
  isPending: true,
  response: prevState.data,
})
// fullfiled
export const fulfilledReducer: any = () => (_: any, { payload }: any): object => ({
  isPending: false,
  response: payload,
})
// reject
export const rejectedReducer: any = () => (prevState: any, { payload = {} }): object => ({
  isPending: false,
  response: prevState.data,
  errorMessage: payload,
})