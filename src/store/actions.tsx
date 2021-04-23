import store from './store'
const state: WishList[] = store.getState().shoppingList;

// Utility function
const loopOverLists = (wishLists: WishList[], loopOverItems: any) => 
  wishLists.map(list => {
    return {
      name: list.name,
      items: loopOverItems(list.items)
    }
  })

export const setShoppingList = (shoppingList: WishList[]) => ({
  type: 'set/shoppingList',
  payload: shoppingList
})

export const setCheapest = (dispatch: any) => {
  dispatch(emptyShoppingList)
}

export const setMostFavorite = (dispatch: any) => {
  const favorite = (items: WishListItem[]) =>
    items.reduce((prev, curr) => prev.favorite > curr.favorite ? prev : curr)

  const setFavorite = (items: WishListItem[]) =>
    items.map(item => {
      item.productId === favorite(items).productId
        ? item.confirmed = true
        : item.confirmed = false
      return item
    })
    
  dispatch(setShoppingList(loopOverLists(state, setFavorite)))
}

export const setCustomOption = (shoppingLists: WishList[]) => {
  console.log(shoppingLists)
}

export const emptyShoppingList = (dispatch: any) => {
  const setUnConfirmed = (items: WishListItem[]) =>
    items.map(item => {
      item.confirmed = false
      return item
    })
  
  dispatch(setShoppingList(loopOverLists(state, setUnConfirmed)))
}



