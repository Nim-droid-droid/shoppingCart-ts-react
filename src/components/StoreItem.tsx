import { Button, Card } from "react-bootstrap"
import {formatCurrency} from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

// interface
type StoreItemProps = {
  id: number
  name: string
  price: number
  imgURL: string
}

export function StoreItem({id, name, price, imgURL}: StoreItemProps){

  // use the context
  const {       
    getItemQuantity, 
    incrementCartQuantity, 
    decrementCartQuantity,
    removeItemQuantity } = useShoppingCart()

  // cart quantity
  const quantity = getItemQuantity(id)
  return (
  <Card className="h-100">
    <Card.Img variant="top" src={imgURL} height="200px" style={{objectFit: "cover"}}/>
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
      </Card.Title>
      
      <div className="mt-auto">
        {quantity === 0 
        // 1st column
        ? (<Button className="w-100" onClick={() => incrementCartQuantity(id)} >+ Add to Cart</Button>) 
        // 2nd column
        :  (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
          <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
          >
            <Button onClick={() => decrementCartQuantity(id)} >-</Button>
            <div>
              <span className="fs-3">{quantity}</span> in cart
            </div>
            {/* 3rd column */}
            <Button onClick={() => incrementCartQuantity(id)} >+</Button>
            {/* 3rd column */}
          </div>
          <Button variant="danger" size="sm" onClick={() => removeItemQuantity(id)} >Remove</Button>
          </div>
          )}

      </div>
    </Card.Body>
  </Card>
  )
}