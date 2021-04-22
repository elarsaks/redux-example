import * as React from "react"
import styled from 'styled-components'
import { useSelector, shallowEqual } from "react-redux"

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
export const Left: React.FC = () => {

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )
  
  return (
    <LeftHalfWrapper >
      <h1>Shopping List</h1>
      
    </LeftHalfWrapper>
  )
}