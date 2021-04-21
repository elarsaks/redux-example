type WishList = {
  name: String
  items: WishListItem[]
}

type WishListItem = {
  productId: Number
  favorite: Number
  confirmed: Boolean
}