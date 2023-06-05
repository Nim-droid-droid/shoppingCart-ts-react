import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

// without this get the ERROR: Parameter 'isOpen' implicitly has an 'any' type
type ShoppingCartProps = {
  isOpen: boolean
}

// pass isOpen to ShoppingCart() so i can use it in show{}
  // in ShoppingCartContext file isOpen state was passed into ShoppingCart cmpnt as a prop also called isOpen
export function ShoppingCart({isOpen} : ShoppingCartProps){

  const {closeCart} = useShoppingCart()
  return(
    // Bootstrap's offvanva gives the panel a slide in effect
      // If you see clicks outside of panel, it closes
      //  -> placement="end" -> So panel shows up on the right hand side
        // could i have just used the onClose()?
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  )
}