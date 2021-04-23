import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux"
interface ProductDivWrapperProps {
  confirmed: boolean
  value: number
}

const ProductDivWrapper = styled.div<ProductDivWrapperProps>`
  .open {
    visibility: visible;
    height: ${(p) => p.value > 63 ? '100px' : '75px'}; 
    transition: all .75s ease;
    position: relative;
    background-color:  aliceblue;
    border: 1px solid teal;
    margin-top: 3px;
    border-radius: 0.3em;
    transition: all .5s ease;
  }

  .closed {
    visibility: hidden;
    overflow: hidden;
    height: 0px;
    transition: all .55s ease;
  }

  .title {
    background-color: ${(p) => p.confirmed ? '#51c8f7' : '#139bd1'}; 
    padding: 0.5em;
    border-radius: 0.3em 0.3em 0 0;
  }

  .lower-half{
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
  }

  .favorite{
    color: #ff9100
  }

  button {
    font-size: 1.1em;
    cursor: pointer;
  }
`

interface ProductProps {
  amount: number
  confirmed: boolean
  favorite: number
  open: boolean
  price: number
  productId: number
  title: string
  sendItemToShoppingList: any
}

const Product: React.FC<ProductProps> = ({
  amount,
  confirmed,
  favorite,
  open,
  price,
  productId,
  title,
  sendItemToShoppingList
}) => {

  const customSelection: boolean = useSelector(
    (state: any) => state.customSelection
  )

  return (
    <ProductDivWrapper
      value={title.length}
      confirmed={confirmed}
    >
      <div className={open ? 'open' : 'closed'}>
          <div className="title" >{title}</div>
          <div className="lower-half">
            <div >Price: {price}€</div>
              
            <div > Favorite: 
              {[...Array(favorite)].map((e, i) => <span className="favorite" key={i}> ★</span>)} 
            </div>
                
            {amount === 0
              ? <button
                  onClick={sendItemToShoppingList}
                  disabled={!customSelection}
                >
                  {confirmed ? 'Disconfirm' : 'Confirm'}
                </button>
              : <div>
                  Amount: <b>{amount} </b>
                  Discount: <b>{amount === 1 ? 0 : amount > 9 ? 0 : amount * 10 }%</b>
                </div>
            }
            </div>
        </div>
    </ProductDivWrapper>
  )
}

export default Product