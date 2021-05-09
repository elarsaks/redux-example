import api from '../api'
import wishLists from './initialState.json'

export const SET_CHEAPEST = "SET_CHEAPEST";
export const SET_CUSTOM_SELECTION = "SET_CUSTOM_SELECTION";
export const SET_EMPTY = "SET_EMPTY";
export const SET_ERROR = "SET_ERROR";
export const SET_FAVORITE = "SET_FAVORITE";
export const SET_FULL_PRICE = "SET_FULL_PRICE";
export const SET_SHOPPING_LIST = "SET_SHOPPING_LIST";
export const SET_SINGLE_PRODUCT = "SET_SINGLE_PRODUCT";
export const SET_STATUS = "SET_STATUS";
export const SET_TOTAL = "SET_TOTAL";

export const setCheapest = () => ({
    type: 'SET_CHEAPEST',
})

export const setCustomSelection = (customSelection: boolean) => ({
    type: 'SET_CUSTOM_SELECTION',
    payload: customSelection
})

export const emptyShoppingList = () => ({
    type: 'SET_EMPTY',
})

export const setError = (error: WishList[]) => ({
    type: 'SET_ERROR',
    payload: error
})

export const setFavorite = () => ({
    type: 'SET_FAVORITE',
})

export const setFullPrice = (fullPrice: number) => ({
    type: 'SET_FULL_PRICE',
    payload: fullPrice
})

export const setShoppingList = (shoppingList: WishList[]) => ({
    type: 'SET_SHOPPING_LIST',
    payload: shoppingList
})

export const setSingleProduct = (payload: { listName: string, productId: number }) => ({
    type: 'SET_SINGLE_PRODUCT',
    payload: payload
})

export const setStatus = (status: string) => ({
    type: 'SET_STATUS',
    payload: status
})

export const setTotal = (total: number) => ({
    type: 'SET_TOTAL',
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
            .catch(err => dispatch(setError(err)))

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

