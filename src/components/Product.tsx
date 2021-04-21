import * as React from "react"
import styled from 'styled-components'

const ProductDivWrapper = styled.div`
  .open {
    visibility: visible;
    height: 100px; 
    transition: all .75s ease;
    position: relative;
    background-color: #d3d3d3;
    border: 1px solid;
    margin-bottom: 3px;
    border-radius: 0.1em;
    transition: all .5s ease;
  }

  .closed {
    visibility: hidden;
    overflow: hidden;
    height: 0px;
    transition: all .55s ease;
  }

  .title {
   background-color: #8a8a8a;
   padding: 0.5em;
  }

  .lower-half{
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
  }

  .favorite{
    color: #ff9100
  }
`

interface ProductProps {
  favorite: number
  id: number
  open: boolean
  price: number
  title: string
}

const Product: React.FC<ProductProps> = ({
  favorite,
  id,
  open,
  price,
  title,
}) => {
  return (
    <ProductDivWrapper >
      <div className={open ? 'open' : 'closed'}>
        <div className="title" >{title}</div>
        <div className="lower-half">
          <div >Price: {price}€</div>
          <div > Favorite: 
            {[...Array(favorite)].map((e, i) => <span className="favorite" key={i}> ★</span>)} 
          </div>
          <div >
            <button>Confirm</button>
          </div>
        </div>
      </div>
    </ProductDivWrapper>
  )
}

export default Product