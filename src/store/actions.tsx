import store from './store'
import api from '../api'
import wishLists from './initialState.json'

const state: ProductList[] = store.getState().shoppingList;

// Utility function
const loopOverLists = (wishLists: ProductList[], loopOverItems: any) => 
  wishLists.map(list => {
    return {
      name: list.name,
      items: loopOverItems(list.items)
    }
  })

export const emptyShoppingList = (dispatch: any) => {

  const setUnConfirmed = (items: Product[]) =>
    items.map(item => {
      item.confirmed = false
      return item
    })
    
  dispatch(setShoppingList(loopOverLists(state, setUnConfirmed))) 
}

export const setTheCheapest = (dispatch: any) => {
  const cheapest = (items: Product[]) =>
    items.reduce((prev, curr) => prev.price < curr.favorite ? prev : curr)
  
  const setCheapest = (items: Product[]) =>
    items.map(item => {
      item.productId === cheapest(items).productId
        ? item.confirmed = true
        : item.confirmed = false
      return item
    })
  
  dispatch(setShoppingList(loopOverLists(state, setCheapest))) 
}

export const setCustomOption = (shoppingLists: WishList[]) => {
  console.log(shoppingLists)
}

export const setInitialState = () => (dispatch: any) => {
  dispatch(setStatus('loading'))
  
   // Get Single Product data
   const getProductsData = (i: WishListItem) =>
      api.getProductsData(i.productId)
        .then(data => {
          data.productId = data.id
          data.confirmed = i.confirmed
          data.favorite = i.favorite
          return data
        })
    
    // Get Products data per WishList
    const getWishListProducts = (wishList: WishList) =>
      Promise.all(wishList.items.map((i: WishListItem) =>
        getProductsData(i)
      )
    )
  
    // Loop over wishlists
    const getProductsList = () =>
      Promise.all(wishLists.map((wishList: any) => {
        return getWishListProducts(wishList)
          .then((data) => {
            wishList.items = data
          return wishList
          })
      })
    )
      
    getProductsList()
      .then(data => dispatch(setShoppingList(data)))
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

export const setShoppingList = (shoppingList: WishList[]) => ({
  type: 'set/shoppingList',
  payload: shoppingList
})

export const setStatus = (status: string) => ({
  type: 'set/status',
  payload: status
})
