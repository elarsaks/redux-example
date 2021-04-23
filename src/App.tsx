import React, { useEffect } from 'react';
import "./App.scss"
import styled from 'styled-components'
import { useSelector, useDispatch, shallowEqual } from "react-redux"
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

  const shoppingList: WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  const status: string = useSelector(
    (state: any) => state.status
  )

  useEffect(() => {
    dispatch(setInitialState())
  }, [dispatch])

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
        
          <CenterMenu />
          
        <RightHalfWrapper>
          <h1>Wish List</h1>
          {shoppingList.map((wishList: WishList) => (
            <WishList
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