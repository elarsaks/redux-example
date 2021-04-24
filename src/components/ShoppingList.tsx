import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import Product from "./Product"
import { setTotal } from "../store/actions"

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
    (state: any) => state.shoppingList
  )

  const  getAllProducts = (wishLists: ProductList[]) => {
    let productList: Product[] = []
    wishLists.forEach((i: ProductList) => productList.push(...i.items))
    return productList
  }

  const  countSameProducts = (productList: Product[], productId: number) => 
    productList.filter((p) => p.productId === productId).length;
  
  const mapProductsDataBackToIds = (confirmedProducts: Product[], productsWithAmounts: any) => {
    return productsWithAmounts.map((p: any) =>
      confirmedProducts.filter((cp: Product) => cp.productId === p.productId))
  }

  const shoppingList = () => {
    const productList = getAllProducts(initialList)
    const confirmedProducts = productList.filter(product => product.confirmed)
    const uniqueProducts = confirmedProducts.map(item => item.productId)
      .filter((value:number, index: number, self: number[]) => self.indexOf(value) === index)
    
    
    // Count repeating products
    const productsWithAmounts = uniqueProducts.map(p => {
      return {
        productId: p,
        amount: countSameProducts(confirmedProducts, p)
        }
    })

    return mapProductsDataBackToIds(confirmedProducts, productsWithAmounts)
  }

  // Get Shopping list total price
  const totalPrice = () => {
    const productList = shoppingList()
    const getDiscount = (price: number, amount: number) => {

      if (amount > 1 && amount < 9) {
        return price * amount - (price * amount/10)
      } else if (amount > 9) {
        return price * amount - (price * 9/10)
      } else {
       return  price * amount
      }
    }
    const priceList = productList.map((list: Product[]) => getDiscount(list[0].price, list.length))

    return priceList.reduce((acc:number, curr: number)=> acc + curr)
  }

  // Get average amount of stars incase there same product from different child
  const getFavoriteAverage = (productList: Product[]) => {
    const favorites = productList.map(p => p.favorite)
    const sum = favorites.reduce((a, c) => a + c)
    return Math.round(sum / favorites.length)
  }

  const productList = shoppingList()
  const dispatch: any = useDispatch()
  const total = totalPrice()

  useEffect(() => {
    dispatch(setTotal(total))
  }, [dispatch, productList, total])


  return (
    <LeftHalfWrapper >
      <h1>Shopping List</h1>
      {productList.map((product: Product[], i: number) => (
        <Product
          key={i}
          amount={product.length}
          confirmed={product[0].confirmed}
          open={true}
          price={product[0].price}
          title={product[0].title}
          favorite={getFavoriteAverage(product)}
          sendItemToShoppingList={null}/>
      ))}
      
    </LeftHalfWrapper>
  )
}