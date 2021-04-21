export const loading = () => ({ type: 'loading' })

// Todo: error type
export const setError = (error: any) => ({
  type: 'error',
  payload: error.message,
})
