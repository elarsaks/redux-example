import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Product from './Product'
import { useDispatch } from "react-redux"
import { setSingleProduct } from '../store/actions'

interface WishListWrapperProps {
  activeHeader: boolean
}

const WishListWrapper = styled.div<WishListWrapperProps>`
  position: relative;
  display: inline-block;
  border-radius: 0.22em;
  margin-bottom: 0.5em;
  width: 100%;

  .wishlist-header{
    background-color: ${p => p.activeHeader ? '#13c4d1' : 'teal'};
    color: white;
    border-radius: 0.2em;
    padding: 0.5em;
    font-size: 1.2em;
    cursor: pointer;
    text-transform: uppercase;

    :hover{
      background-color: #13c4d1;
    }
  }
`

interface WishListProps {
  activeHeader: boolean
  wishList: ProductList
}

const WishList: React.FC<WishListProps> = ({
  activeHeader,
  wishList
}) => {
  const dispatch: any = useDispatch()
  const [open, setOpen] = useState<boolean>(false)

  const sendItemToShoppingList = (listName: string, productId: number) => {
    dispatch(setSingleProduct({ listName, productId }))
  }

  useEffect(() => {
    if (activeHeader === true) {
      setOpen(activeHeader)
    }
  }, [activeHeader])

  return (
    <WishListWrapper
      key={wishList.name}
      activeHeader={activeHeader}
    >
      <div
        className="wishlist-header"
        onClick={() => setOpen(!open)}
      >
        {wishList.name}
      </div>

      { wishList.items.map((wishListItem: any) => (
        <Product
          amount={0}
          confirmed={wishListItem.confirmed}
          key={wishListItem.productId}
          favorite={wishListItem.favorite}
          open={open}
          price={wishListItem.price}
          title={wishListItem.title}
          sendItemToShoppingList={() =>
            sendItemToShoppingList(wishList.name, wishListItem.productId)}
        />
      ))}
    </WishListWrapper>
  )
}

export default WishList