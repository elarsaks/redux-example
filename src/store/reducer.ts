import wishLists from './initialState.json'

const initialState: any = {
  customSelection: true,
  error: null,
  shoppingList: wishLists,
  status: 'loading',
  total: 0
}

// Utility function
const loopOverLists = (wishLists: ProductList[], loopOverItems: any) => 
  wishLists.map(list => {
    return {
      name: list.name,
      items: loopOverItems(list.items)
    }
  })

export default function reducer(state = initialState, action: any) {
  switch (action.type) {

    case 'set/shoppingList': {
      return {
        ...state,
        shoppingList: action.payload,
        status: 'idle'
      }
    }
      
    case 'set/cheapest': {
      const cheapest = (items: Product[]) =>
        items.reduce((prev, curr) => prev.price < curr.favorite ? prev : curr)
      
      const setCheapest = (items: Product[]) =>
        items.map(item => {
          item.productId === cheapest(items).productId
            ? item.confirmed = true
            : item.confirmed = false
          return item
        })
      return {
        ...state,
        customSelection: false,
        shoppingList: loopOverLists(state.shoppingList, setCheapest)
      }
    }
      
    case 'set/customSelection': {
      return {
        ...state,
        customSelection: action.payload,
      }
    }
      
    case 'set/empty': {
      const setUnConfirmed = (items: Product[]) =>
        items.map(item => {
          item.confirmed = false
          return item
        })
      
      return {
        ...state,
        customSelection: false,
        shoppingList: loopOverLists(state.shoppingList, setUnConfirmed)
      }
    }
      
    case 'set/favorite': {
      const favorite = (items: WishListItem[]) =>
        items.reduce((prev, curr) => prev.favorite > curr.favorite ? prev : curr)

      const setFavorite = (items: WishListItem[]) =>
        items.map(item => {
          item.productId === favorite(items).productId
            ? item.confirmed = true
            : item.confirmed = false
          return item
        }) 
      return {
        ...state,
        customSelection: false,
        shoppingList: loopOverLists(state.shoppingList, setFavorite)
      }
    }
      
    case 'set/singleProduct': {
      const getWishList = (shoppingLists: ProductList[]) => 
        shoppingLists.map(list => {
          if (list.name === action.payload.listName) {
            confirmProduct(list.items)
          }
          return list
        })
      

      const confirmProduct = (items: Product[]) => 
        items.map(item => {
          if (item.productId === action.payload.productId) {
            item.confirmed = !item.confirmed
          }
          return item
        })
      
      return {
        ...state,
        shoppingList: getWishList(state.shoppingList)
      }
    }
      
    case 'set/total': {
      // TODO: calculate total + setTotal action
      return {
        ...state,
        customSelection: false,
        shoppingList: 0 //loopOverLists(state.shoppingList, setFavorite)
      }
    }
      
    default:
      return state
  }
}