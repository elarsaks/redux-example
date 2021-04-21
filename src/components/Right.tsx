import * as React from "react"
import styled from 'styled-components'
import { useSelector, shallowEqual } from "react-redux"

const RightDiv = styled.div`
  width: 45%;
  background-color: aqua;
`

const WishList = styled.div`
  height: 1.2em;
  width: 100%;
  background-color: gray;
`


const WishListItem = styled.div`
  height: 1.2em;
  width: 100%;
  background-color: #808080;
`


export const Right: React.FC = () => {

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  return (
    <RightDiv>
      {shoppingList.map((wishList: WishList) => (
        <WishList key={wishList.name}>
          <h3>{wishList.name}</h3>

        </WishList>
      ))}
    </RightDiv>
  )
}

/* 
          {wishList.items.map((wishListItem: any) => (
            <WishListItem key={wishListItem.id}>
              <p>{ wishListItem}</p>
            </WishListItem>
          ))}
*/