import * as React from "react"
import "./App.scss"
import styled from 'styled-components'
import { Dispatch } from "redux"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import WishList from './components/WishList'


import { CenterMenu } from "./components/CenterMenu"
import { Left } from "./components/Left"
import { setInitialState } from "./store/actions"

const RightHalfWrapper = styled.div`
  width: 45%;
  padding: 0.3em;
  overflow-y: scroll;
`

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch()
  dispatch(setInitialState())

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  return (
    <main>
    <div id="header">
      <h1>
      Droppe Xmas
      </h1>
    </div>
    <div id="content-container">
      <Left />
        <CenterMenu />
        
      <RightHalfWrapper>
        {shoppingList.map((wishList: WishList) => (
          <WishList
            key={wishList.name}
            name={wishList.name}
            items={wishList.items}
          />))}
      </RightHalfWrapper>
    </div>
</main>
  )
}

export default App