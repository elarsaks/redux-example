import wishLists from './initialState.json'

const initialState: any = {
  error: null,
  status: 'idle',
  wishLists: wishLists
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'set/wishLists': {
      return {
        ...state,
        error: null,
        wishLists: action.payload,
        status: 'idle'
      }
    }
    case 'loading': {
      return {
        ...state,
        status: action.payload,
      }
    }
    default:
      return state
  }
}