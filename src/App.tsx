import React, { useEffect } from 'react';
import "./App.scss"
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { CenterMenu } from "./components/CenterMenu"
import { ShoppingList } from "./components/ShoppingList"
import WishList from './components/WishList'
import { setInitialState } from "./store/actions"


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

const App: React.FC = () => {
  const dispatch: any = useDispatch()

  const shoppingList: ProductList[] = useSelector(
    (state: any) => state.shoppingList
  )

  const status: string = useSelector(
    (state: any) => state.status
  )

  const total: number = useSelector(
    (state: any) => state.total
  )

  useEffect(() => {
    dispatch(setInitialState())
  }, [dispatch])

  const hasSelectedItem = (items: Product[]) => 
    items.filter(item => item.confirmed === true)

  return (
    <main>
    <div id="header">
      <h1>
          Droppe X-mas
      </h1>
    </div>
      {status === 'loading'
        ? <h1>Loading ...</h1>
        : <div id="content-container">
        <ShoppingList />
        
          <CenterMenu total={total}/>
          
        <RightHalfWrapper>
          <h1> Wish List</h1>
          {shoppingList.map((wishList: ProductList) => (
            <WishList
              activeHeader={hasSelectedItem(wishList.items).length > 0}
              key={wishList.name}
              name={wishList.name}
              items={wishList.items}
            />))}
        </RightHalfWrapper>
      </div>
      }
</main>
  )
}

export default App