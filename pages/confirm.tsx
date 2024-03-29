import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { ShoppingList } from "../components/ShoppingList"
import WishList from '../components/WishList'
import api from '../api'
import { connect } from 'react-redux'
import Router from 'next/router'
import { setInitialState } from "../redux/actions"
import { useDispatch } from "react-redux"

const ConfirmDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: column;


  .content {
    width: 70vw;
    max-height: 90vh;
    padding: 1em 0.5em 1em 1em;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 1em;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    text-align: center;

    ::-webkit-scrollbar { 
      width: 0;
      height: 0;
    }
    
    .confirm-actions {
      position: relative;
      display: flex;
      justify-content: space-around;
      width: 100%;

      .confirm-btn {
          background-color: teal;
      }

      .cancel-btn {
        background-color: #a32424;
      }

      .confirm-btn:hover {
          background-color:#13c4d1;
      }

      .cancel-btn:hover {
        background-color: #d33434;
      }
    }
  }
`

const Total = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  white-space: pre-wrap;
  margin-bottom: 1em;
`

const Button = styled.button`
  outline: 0;
  font-size: 1.1em;
  margin: 0.1em;
  cursor: pointer;
  color: white;
  padding: 0.5em;
  text-transform: uppercase;
  border-radius: 0.3em;
  border: none;
  min-width: 4em;
`
interface confirmProps {
  state: any
}

const Confirm: React.FC<confirmProps> = ({
  state
}) => {

  const shoppingList: ProductList[] = state.shoppingList
  const fullPrice: number = state.fullPrice
  const total = state.total
  const dispatch: any = useDispatch()

  const [confirmed, setConfirmed] = useState('wishList')

  const hasSelectedItem = (items: Product[]) =>
    items.filter(item => item.confirmed === true)

  const confirm = () => {
    if (confirmed === 'wishList') {
      setConfirmed('shoppingList')
    } else if (confirmed === 'shoppingList') {
      setConfirmed('confirmed')
      saveProductsToApi()
    } else {
      setConfirmed('wishList')
    }
  }

  const saveProductsToApi = () =>
    Promise.all(shoppingList.map((wishList: WishList) =>
      Promise.all(wishList.items.map(product =>
        api.saveProductData(product.productId)))))
      .then(() => Router.push('/'))

  useEffect(() => {
    dispatch(setInitialState())
  }, [dispatch])

  return (
    <ConfirmDiv>
      <div className="content">
        {confirmed === 'wishList'
          ? <div >
            <h1> Wish List</h1>
            {shoppingList.map((wishList: ProductList) => (
              <WishList
                key={wishList.name}
                activeHeader={hasSelectedItem(wishList.items).length > 0}
                width={'99%'}
                wishList={wishList}
              />
            ))}
          </div>

          : confirmed === 'shoppingList'
            ? <div >
              <ShoppingList initialList={shoppingList} width={'99%'} />
              <Total >
                Total Price: <b>{fullPrice}€   </b>
                Total Discount: <b>{(fullPrice - total).toFixed(2)}€   </b>
                Final Price: <b>{total}€</b>
              </Total>
            </ div>

            : <div>
              <h1>Thank you for your purchase!</h1>
            </div>

        }
        {confirmed === 'wishList' || confirmed === 'shoppingList'
          ? <div className="confirm-actions">
            <Button
              className="cancel-btn"
              onClick={() => Router.push('/')}
            >
              Cancel
            </Button>

            <Button
              className="confirm-btn"
              onClick={() => confirm()}
            >
              {confirmed === 'wishList' ? 'Next' : 'Confirm'}
            </Button>
          </div>

          : <div className="confirm-actions"></div>
        }

      </div>
    </ConfirmDiv>
  )
}

export default connect((state) => state)(Confirm)