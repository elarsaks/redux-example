import React from 'react';
import styled from 'styled-components'
import { useSelector } from "react-redux"
interface ProductDivWrapperProps {
  amount: number
  confirmed: boolean
  customSelection: boolean
  value: number
}

const ProductDivWrapper = styled.div<ProductDivWrapperProps>`
  cursor: ${(p) => (p.customSelection && p.amount === 0) ? 'pointer' : 'auto'};
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
    background-color: ${(p) => p.confirmed ? '#51c8f7' : '#068dc2'}; 
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

  .confirmation-text {
    font-size: 1.1em;
    font-weight: 600;
    width: 33%;
    text-align: center;
    color:${(p) => p.confirmed ? 'teal' : '#a32424'}; 
  }
`
interface LowerHalfSectionProps {
  flexGrow: number
}

const LowerHalfSection = styled.div<LowerHalfSectionProps>`
  display: flex;
  flex-grow: ${(p) => p.flexGrow};
`

interface ProductProps {
  amount: number
  confirmed: boolean
  favorite: number
  open: boolean
  price: number
  title: string
  sendItemToShoppingList: any
}

const Product: React.FC<ProductProps> = ({
  amount,
  confirmed,
  favorite,
  open,
  price,
  title,
  sendItemToShoppingList
}) => {

  const customSelection: boolean = useSelector(
    (state: any) => state.customSelection
  )

  return (
    <ProductDivWrapper
      amount={amount}
      value={title.length}
      confirmed={confirmed}
      customSelection={customSelection}
      onClick={customSelection ? sendItemToShoppingList : null}
    >
      <div className={open ? 'open' : 'closed'}>
        <div className="title" >
          {title}
        </div>
        <div className="lower-half">
          <LowerHalfSection flexGrow={1} >
            Favorite: {[...Array(favorite)].map((e, i) =>
            <span className="favorite" key={i}> ★</span>)}
          </LowerHalfSection>

          <LowerHalfSection flexGrow={1}>
            Price: {price}€
          </LowerHalfSection>

          {amount === 0
            ? <LowerHalfSection flexGrow={1} className="confirmation-text">
              {!confirmed ? 'Not Confirmed' : 'Confirmed'}
            </LowerHalfSection>
            : <LowerHalfSection flexGrow={1}>
              Amount: <b>{amount} </b>
                  Discount: <b>{amount === 1 ? 0 : amount > 9 ? 0 : amount * 10}%</b>
            </LowerHalfSection>
          }
        </div>
      </div>
    </ProductDivWrapper>
  )
}

export default Product