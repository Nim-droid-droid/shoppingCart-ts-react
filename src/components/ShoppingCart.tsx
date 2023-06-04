import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";


// pass isOpen to ShoppingCart() so i can use it in show{}
export function ShoppingCart(isOpen){
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