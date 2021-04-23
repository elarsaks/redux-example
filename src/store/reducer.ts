import wishLists from './initialState.json'

const initialState: any = {
  shoppingList: wishLists
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'set/shoppingList': {
      return {
        ...state,
        shoppingList: action.payload,
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