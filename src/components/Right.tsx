import * as React from "react"
import { useSelector, shallowEqual } from "react-redux"

export const Right: React.FC = () => {

  const shoppingList: readonly WishList[] = useSelector(
    (state: any) => state.shoppingList,
    shallowEqual
  )

  return (
    <div className="half right">

    </div>
  )
}