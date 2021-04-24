import api from '../api'
import wishLists from './initialState.json'

export const setShoppingList = (shoppingList: WishList[]) => ({
  type: 'set/shoppingList',
  payload: shoppingList
})

export const setCustomSelection = (customSelection: boolean) => ({
  type: 'set/customSelection',
  payload: customSelection
})
  
export const setStatus = (status: string) => ({
  type: 'set/status',
  payload: status
})

export const setSingleProduct = (payload: {listName: string, productId: number}) => ({
  type: 'set/singleProduct',
  payload: payload
})

export const emptyShoppingList = () => ({
  type: 'set/empty',
})

export const setCheapest = () => ({
  type: 'set/cheapest', 
})

export const setFavorite = () => ({
  type: 'set/favorite',  
})

export const setTotal = (total: number) => ({
  type: 'set/total',
  payload: total
})


export const setInitialState = () => (dispatch: any) => {
  dispatch(setStatus('loading'))
  
   // Get Single Product data
   const getProductsData = (item: any) =>
      api.getProductsData(item.productId)
       .then(data => {
         item.price = data.price
         item.title = data.title
          return item
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

