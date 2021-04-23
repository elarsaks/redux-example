import wishLists from './initialState.json'

const initialState: any = {
  shoppingList: wishLists,
  status: 'loading',
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'set/shoppingList': {
      return {
        ...state,
        shoppingList: action.payload,
        status: 'idle'
      }
    }
    case 'set/empty': {
      return {
        ...state,
        shoppingList: wishLists
      }
    }
    default:
      return state
  }
}