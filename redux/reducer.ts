// Utility function
const loopOverLists = (wishLists: ProductList[], loopOverItems: any) =>
    wishLists.map(list => {
        return {
            name: list.name,
            items: loopOverItems(list.items)
        }
    })


const initialState: any = {
    customSelection: true,
    fullPrice: 0,
    error: null,
    shoppingList: [],
    status: 'loading',
    total: 0,
}

export default function reducer(state = initialState, action: any) {
    switch (action.type) {

        case 'SET_CHEAPEST': {
            const cheapest = (items: Product[]) =>
                items.reduce((prev, curr) => prev.price < curr.price ? prev : curr)

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
            
        case 'SET_CUSTOM_SELECTION': {
            return {
                ...state,
                customSelection: action.payload,
            }
        }
            
        case 'SET_EMPTY': {
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
            
        case 'SET_ERROR': {
            return {
                ...state,
                error: action.payload
            }
        }
            
        case 'SET_FAVORITE': {
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
            
        case 'SET_FULL_PRICE': {
            return {
                ...state,
                fullPrice: action.payload.toFixed(2)
            }
        }

        case 'SET_SHOPPING_LIST': {
            return {
                ...state,
                shoppingList: action.payload,
                status: 'idle'
            }
        }

        case 'SET_SINGLE_PRODUCT': {
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
                customSelection: true,
                shoppingList: getWishList(state.shoppingList)
            }
        }
            
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.payload
            }
        }

        case 'SET_TOTAL': {
            return {
                ...state,
                total: action.payload.toFixed(2)
            }
        }

        default:
            return state
    }
}