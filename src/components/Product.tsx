import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import api from '../api'


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
`

const Amount = styled.div`
 // background-color: blue;
`

interface ProductProps {
  amount: number
  id: number
  favorite: number
  open: boolean
}

const Product: React.FC<ProductProps> = ({
  amount,
  favorite,
  id,
  open
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [product, setProduct] = useState<any>({
    productId: 0,
    favorite: 0,
    confirmed: false,
    title: '',
    price: 0,
  })

  useEffect(() => {
    setLoading(true)
    api.getProductsData(id)
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  },[id])

  return (
    <ProductDivWrapper value={product.title.length}>
      {loading && open
        ? <p>Loading ...</p>
        : <div className={open ? 'open' : 'closed'}>
            <div className="title" >{product.title}</div>
            <div className="lower-half">
                <div >Price: {product.price}€</div>
                
              <div > Favorite: 
                {[...Array(favorite)].map((e, i) => <span className="favorite" key={i}> ★</span>)} 
              </div>
                
                {amount === 0
                  ? <button>Confirm</button>
                  : <Amount>
                      <text>Amount: <b>{amount}</b> </text>
                      <text>Discount: <b>{amount === 1 ? 0 : amount === 2 ? 20 : 30 }%</b> </text>
                    </Amount>
                }
            </div>
        </div>
      }
      
    </ProductDivWrapper>
  )
}

export default Product