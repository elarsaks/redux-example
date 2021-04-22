
export const setError = (error: any) => ({
  type: 'set/error',
  payload: error.message,
})

export const setShoppingList = (shoppingList: any) => ({
  type: 'set/shoppingList',
  payload: shoppingList
})

export const setStatus = (status: string) => ({
  type: 'set/status',
  payload: status
})

