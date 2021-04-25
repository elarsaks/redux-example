import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Product from './Product'
import { useDispatch } from "react-redux"
import { setSingleProduct } from '../store/actions'

interface WishListWrapperProps {
  activeHeader: boolean
  width: string
}

const WishListWrapper = styled.div<WishListWrapperProps>`
  width: ${(p) => p.width};
  position: relative;
  display: inline-block;
  border-radius: 0.22em;
  margin-bottom: 0.5em;

  .wishlist-header{
    // Width is 99% only in Final Confirmation Dialog
    background-color: ${p => p.activeHeader ? '#13c4d1' : 'teal'};
    cursor: ${p => p.width === '100%' ? 'pointer' : ''};
    color: white;
    border-radius: 0.2em;
    padding: 0.5em;
    font-size: 1.2em;
    text-transform: uppercase;

    :hover{
     // background-color: #13c4d1;
      background-color: ${p => p.width === '100%' ? '#13c4d1' : ''};
    }
  }
`

interface WishListProps {
  activeHeader: boolean
  width: string
  wishList: ProductList
}

const WishList: React.FC<WishListProps> = ({
  activeHeader,
  width,
  wishList
}) => {
  const dispatch: any = useDispatch()
  const [open, setOpen] = useState<boolean>(false)

  const sendItemToShoppingList = (listName: string, productId: number) =>
    dispatch(setSingleProduct({ listName, productId }))

  useEffect(() => {
    if (activeHeader === true) {
      setOpen(activeHeader)
    }
  }, [activeHeader])

  // Width is 99% only in Final Confirmation Dialog
  useEffect(() => {
    if (width === '99%') {
      setOpen(true)
    }
  }, [width])

  return (
    <WishListWrapper
      key={wishList.name}
      activeHeader={activeHeader}
      width={width}
    >
      <div
        className="wishlist-header"
        onClick={() => width === '100%' ? setOpen(!open) : null}
      >
        {wishList.name}
      </div>

      { wishList.items.map((wishListItem: any) => (
        <Product
          amount={0}
          confirmed={wishListItem.confirmed}
          favorite={wishListItem.favorite}
          key={wishListItem.productId}
          open={open}
          sendItemToShoppingList={() => width === '99%'
            ? null
            : sendItemToShoppingList(wishList.name, wishListItem.productId)}
          price={wishListItem.price}
          title={wishListItem.title}
          width={width}
        />
      ))}
    </WishListWrapper>
  )
}

export default WishList