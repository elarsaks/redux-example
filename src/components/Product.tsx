import * as React from "react"
import styled from 'styled-components'

const ProductDiv = styled.div`
  position: relative;
  width: 98%;
  background-color: #d3d3d3;
  border: 1px solid;
  margin-bottom: 3px;
  border-radius: 0.1em;

  .title {
   background-color: #8a8a8a;
   padding: 0.5em;
  }

  .lower-half{
    display: inline-block;
    padding: 0.5em;
  }

  .favorite{
    color: #ff9100
  }
`

interface ProductProps {
  favorite: number
  id: number
  price: number
  title: string
}

const Product: React.FC<ProductProps> = ({
  favorite,
  id,
  price,
  title,
}) => {
  return (
    <ProductDiv >
      <div className="title" >{title}</div>
      <div >
        <div className="lower-half">Price: {price}€</div>
        <div className="lower-half"> Favorite: 
          {[...Array(favorite)].map((e, i) => <span className="favorite" key={i}> ★</span>)} 
        </div>
      </div>
    </ProductDiv>
  )
}

export default Product