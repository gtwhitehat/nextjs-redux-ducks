// Selectors
export const getUser = (state: any) => state.user;
export const getContent = (state: any) => {
  const { response: { data = {} } = {}, status = false } = state.content || {}
  return { contents: data, status }
};