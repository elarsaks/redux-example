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

  // Get Products data
  const getProductsData = (i: WishListItem) =>
    api.getProductsData(i.productId)
      .then(data => {
      data.confirmed = i.confirmed
      data.favorite = i.favorite
      return data
    })
  
  // Get Products data for WishLists
  const getWishListProducts = (wishList: WishList) =>
    Promise.all(wishList.items.map((i: WishListItem) =>
      getProductsData(i)
    )
  )

  // Merge WishLists into ShoppingList
  const getProductList = Promise.all(
    wishLists.map((wishList: any) => getWishListProducts(wishList))
  )

  console.log(getProductList)
  

  //getProductList()
    //.then(data => dispatch(setShoppingList(data)))

}
