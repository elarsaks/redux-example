type WishList = {
  name: string
  items: WishListItem[]
}

type WishListItem = {
  productId: number
  favorite: number
  confirmed: boolean
}