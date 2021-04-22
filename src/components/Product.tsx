import * as React from "react"
import styled from 'styled-components'

interface ProductDivWrapperProps {
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
   background-color: #0e9ca5;
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
    <ProductDivWrapper value={title.length}>
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