import * as React from "react"
import styled from 'styled-components'
import { useSelector, shallowEqual } from "react-redux"
import Product from "./Product"

const LeftHalfWrapper = styled.div`
  width: 45%;
  padding: 0.3em;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar { 
    width: 0;
    height: 0;
  } 
  
  h1{
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  }
`
export const ShoppingList: React.FC = () => {

  const initialList: ProductList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  const  getItemsList = (wishLists: ProductList[]) => {
    let productList: Product[] = []
    wishLists.forEach((i: ProductList) => productList.push(...i.items))
    return productList
  }

  const  countSameProducts = (productList: Product[], productId: number) => 
    productList.filter((p) => p.productId === productId).length;
  
  const mapProductsDataBackToIds = (confirmedProductList: Product[], productsWithAmounts: any) => {
    return productsWithAmounts.map((p: any) =>
      confirmedProductList.filter((cp: Product) => cp.productId === p.productId))
  }

  const shoppingList = () => {
    const productList = getItemsList(initialList)
    const confirmedProductList = productList.filter(product => product.confirmed)
    const uniqueProducts = confirmedProductList.map(item => item.productId)
      .filter((value, index, self) => self.indexOf(value) === index)
    
    // Count repeating products
    const productsWithAmounts = uniqueProducts.map(p => {
      return {
        productId: p,
        amount: countSameProducts(confirmedProductList, p)
        }
    })

    return mapProductsDataBackToIds(confirmedProductList, productsWithAmounts)
  }

  const getFavoriteAverage = (productList: Product[]) => {
    const favorites = productList.map(p => p.favorite)
    const sum = favorites.reduce((a, c) => a + c)
    return Math.round(sum / favorites.length)
  }

  const productList = shoppingList() 

  return (
    <LeftHalfWrapper >
      <h1>Shopping List</h1>
      {productList.map((product: Product[], index: number) => (
        <Product
          amount={product.length}
          id={product[0].productId}
          open={true}
          favorite={getFavoriteAverage(product)}/> 
      ))}
      
    </LeftHalfWrapper>
  )
}