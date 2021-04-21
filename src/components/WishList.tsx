import * as React from "react"
import styled from 'styled-components'
import { useState } from 'react'
import Product from './Product'

const WishListWrapper = styled.div`
  position: relative;
  display: inline-block;
  background-color: cadetblue;
  border-radius: 0.22em;
  margin-bottom: 0.5em;
  width: 100%;

  .wishlist-header{
    padding: 0.5em;
    font-size: 1.2em;
    font-weight: bold;
    cursor: pointer;
  }

`

interface WishListProps {
  items: any[]
  name: string
}

const WishList: React.FC<WishListProps> = ({
  name,
  items
}) => {
  const [open, setOpen] = useState<boolean>(false)



  return (
    <WishListWrapper >
      <div className="wishlist-header" onClick={() => setOpen(!open)}>{name}</div>
        { items.map((wishListItem: any) => (
                <Product
                  key={wishListItem.id}
                  favorite={wishListItem.favorite}
                  id={wishListItem.id}
                  open={open}
                  price={wishListItem.price}
                  title={wishListItem.title}
                />
              ))
        }

    </WishListWrapper>
  )
}

export default WishList