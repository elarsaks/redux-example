import * as React from "react"
import { useSelector, shallowEqual } from "react-redux"

export const Right: React.FC = () => {

  const wishLists: readonly WishList[] = useSelector(
    (state: any) => state.wishLists,
    shallowEqual
  )

  return (
    <div className="half right">

      {wishLists.map((wishList: WishList) => (
        <div key={wishList.name}>
          <h3>{ wishList.name}</h3>
          {wishList.items.map((item: WishListItem) => (
          <div key={item.productId}>
            { item.productId}
          </div>
      ))}
        </div>
      ))}
    </div>
  )
}