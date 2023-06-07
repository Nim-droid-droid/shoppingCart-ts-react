import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

// without this get the ERROR: Parameter 'isOpen' implicitly has an 'any' type
type ShoppingCartProps = {
  isOpen: boolean
}

// pass isOpen to ShoppingCart() so i can use it in show{}
  // in ShoppingCartContext file isOpen state was passed into ShoppingCart cmpnt as a prop also called isOpen
export function ShoppingCart({isOpen} : ShoppingCartProps){
// grab/destructure closeCart, CartItem from useShoppingCart()
  const { closeCart, CartItem } = useShoppingCart()
  return(
    // Bootstrap's offvanva gives the panel a slide in effect
      // If you see clicks outside of panel, it closes
      //  -> placement="end" -> So panel shows up on the right hand side
        // could i have just used the onClose()?
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      {/* Style cart items using react bootstrap*/}
      <Offcanvas.Body>
        {/* 
        Stack all items on top of each other (by default Stack is vertical).
        Gap space of 3 to give each item some space between each other.
        */}
        <Stack gap={3}>
          {/* 
          loop through cartItems 
          & for each item return a component called CartItem.
            Each cmpnnt has a unique key thats the item's id
          Spread out entire item outside of that cart
          */}
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}

          {/* Total price styling */}
          {/* 
          Margin start auto pushes the total as far to the right as possible
          Bold font weight
          font size of five
           */}
          <div className="ms-auto fw-bold fs-5">
          </div>
        </Stack>
      </Offcanvas.Body>

    </Offcanvas>
  )
}