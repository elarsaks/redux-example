const initialState: any = {
  error: null,
  status: 'idle',
  shoppingList: []
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'set/erros': {
      return {
        ...state,
        error: action.payload,
      }
    }
    case 'set/shoppingList': {
      return {
        ...state,
        error: null,
        shoppingList: action.payload,
        status: 'idle'
      }
    }
    case 'set/status': {
      return {
        ...state,
        status: action.payload,
      }
    }
    default:
      return state
  }
}