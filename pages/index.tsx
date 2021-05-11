import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { useDispatch } from "react-redux"
import { CenterMenu } from "../components/CenterMenu"
import { ShoppingList } from "../components/ShoppingList"
import WishList from '../components/WishList'
import { setInitialState } from "../redux/actions"
import { connect } from 'react-redux'

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

interface AppProps {
  state: {
    customSelection: boolean
    error: string
    status: string
    total: number
  }
}

const App: React.FC<AppProps> = ({ state }) => {
  const dispatch: any = useDispatch()

  useEffect(() => {
    dispatch(setInitialState())
  }, [dispatch])

  const hasSelectedItem = (items: Product[]) =>
    items.filter(item => item.confirmed === true)

  return (
    <main>
      {state.status === 'loading' && state.error === null
        /* Loading */
        ? <LoadingDiv>
          <div className="spinner" />
        </LoadingDiv>

        /* Error */
        : state.error != null
          ? <ErrorDiv>
            {/* TODO: Find out why this h1 styling doesnt work in Styled component */}
            <h1 style={{ "color": '#a32424' }}>
              Oops something went wrong, please contact system administrator!
              </h1>
          </ErrorDiv>

          /* Content */
          : <div id="content-container">
            <ShoppingList initialList={state.shoppingList} width={'45%'} />

            <CenterMenu customSelection={state.customSelection} total={state.total} />

            <div className="half">
              <h1> Wish List</h1>
              {state.shoppingList.map((wishList: ProductList) => (
                <WishList
                  key={wishList.name}
                  activeHeader={hasSelectedItem(wishList.items).length > 0}
                  width={'100%'}
                  wishList={wishList}
                />
              ))}
            </div>
          </div>
      }
    </main>
  )
}

export default connect((state) => state)(App)