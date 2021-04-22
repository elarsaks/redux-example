import api from '../api'
import wishLists from './initialState.json'

// Todo: error type
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

