export const getContent = (state: any) => {
  const { response: { data = {} } = {}, isPending = false } = state.content || {}
  return { contents: data, isPending }
};