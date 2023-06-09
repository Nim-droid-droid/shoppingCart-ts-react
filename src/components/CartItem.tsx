type CartItemProps = {
  id: number
  quantity: number
}
// now id & quantity paras have the type CartItemProps where both id & quantity have number data type
  // i have destructure id & quantity from CartItemProps
export function CartItem({ id, quantity }: CartItemProps){

  return(
    <>
    </>
  )
}