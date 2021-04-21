type WishList = {
  name: string
  items: WishListItem[]
}

type Product = {
  productId: number
  favorite: number
  confirmed: boolean
  title: string
  price: number
}

type WishListItem = {
  productId: number
  favorite: number
  confirmed: boolean
}