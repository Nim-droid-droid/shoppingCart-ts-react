import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"


// In the cart panel i want to show the Pricing of the object items, Total price, image of the item, Remove button and it's quantity

type CartItemProps = {
  id: number
  quantity: number
}
// now id & quantity paras have the type CartItemProps where both id & quantity have number data type
  // i have destructure id & quantity from CartItemProps
export function CartItem({ id, quantity }: CartItemProps){
  // I've already created the remove item function so I just to destructure/extract that from useShoppingCart
  const { removeFromCart } = useShoppingCart()
  
  // I need to get the item itself to get the name & price, otherwise i only have the id & quantity thanks to above
    // i already have this stored in data which i imported into storeItems above - from there find the item that has the id that matches id para
  const item = storeItems.find(i => i.id === id)
  // if the item == null, return null meaning dont return anything at all cuz i cant find an item/dont have that item/item doesnt exist
  if (item == null) return null

  // What do i want return/render on the page?
  return(
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      {/* item's img*/}
      <img
        src={item.imgURL}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      {/* item's name */}
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        {/* item's price */}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      {/* item's quantity */}
      <div> {formatCurrency(item.price * quantity)}</div>
      {/* item's Remove btn */}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>

    </Stack>
  )
}