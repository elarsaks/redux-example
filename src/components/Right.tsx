import * as React from "react"
import styled from 'styled-components'
import { useSelector, shallowEqual } from "react-redux"
import Product from './Product'

const RightDiv = styled.div`
  width: 45%;
  background-color: aqua;
  overflow-y: scroll;
`

const WishList = styled.div`
  position: relative;
  display: inline-block;
  background-color: gray;
  padding: 0.5em;

  .wishlist-header{
    padding: 0.5em;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
  }
`

export const Right: React.FC = () => {

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  return (
    <RightDiv>
      {shoppingList.map((wishList: WishList) => (
        <WishList key={ wishList.name }>
          <div className="wishlist-header">{ wishList.name }</div>
          {wishList.items.map((wishListItem: any) => (
            <Product key={wishListItem.id}
              favorite={wishListItem.favorite}
              id={wishListItem.id}
              price={wishListItem.price}
              title={wishListItem.title}
            />
          ))}
        </WishList>
      ))}
    </RightDiv>
  )
}
