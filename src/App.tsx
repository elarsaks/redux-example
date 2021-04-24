import React, { useEffect } from 'react';
import "./App.scss"
import styled, { keyframes } from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { CenterMenu } from "./components/CenterMenu"
import { ShoppingList } from "./components/ShoppingList"
import WishList from './components/WishList'
import { setInitialState } from "./store/actions"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30vh;
	text-align: center;

  .spinner {
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 3px solid #51c8f7;
    border-right: 3px solid #51c8f7;
    border-bottom: 3px solid #51c8f7;
    border-left: 5px solid teal;
    background: transparent;
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }
`

const ErrorDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 30vh;
	text-align: center;
`

const App: React.FC = () => {
  const dispatch: any = useDispatch()

  const shoppingList: ProductList[] = useSelector(
    (state: any) => state.shoppingList
  )

  const customSelection: boolean = useSelector(
    (state: any) => state.customSelection
  )

  const error: string = useSelector(
    (state: any) => state.error
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

  return (
    <main>
      <div id="header">
        <h1> Droppe X-mas </h1>
      </div>

      {status === 'loading' && error === null
        /* Loading */
        ? <LoadingDiv>
          <div className="spinner" />
        </LoadingDiv>

        /* Error */
        : error != null
          ? <ErrorDiv>
            <h1 style={{ "color": '#a32424' }}>
              Oops something went wrong, please contact system administrator!
              </h1>
          </ErrorDiv>

          /* Content */
          : <div id="content-container">
            <ShoppingList />
            <CenterMenu customSelection={customSelection} total={total} />
            <WishList activeHeader={true} shoppingList={shoppingList} />
          </div>
      }
    </main>
  )
}

export default App