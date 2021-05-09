/// <reference types="next" />
/// <reference types="next/types/global" />


type WishList = {
  name: string
  items: WishListItem[]
}

type ProductList = {
  name: string
  items: Product[]
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