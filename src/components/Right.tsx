import * as React from "react"
import styled from 'styled-components'
import { useSelector, shallowEqual } from "react-redux"
import WishList from './WishList'

const RightHalfWrapper = styled.div`
  width: 45%;
  padding: 0.3em;
  overflow-y: scroll;
  scrollbar-width: none;
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

export const Right: React.FC = () => {

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  return (
    <RightHalfWrapper>
      <h1>Wish List</h1>
      {shoppingList.map((wishList: WishList) => (
        <WishList
          key={wishList.name}
          name={wishList.name}
          items={wishList.items}
        />))}
    </RightHalfWrapper>
  )
}
