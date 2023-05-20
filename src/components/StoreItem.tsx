import { Button, Card } from "react-bootstrap"
import {formatCurrency} from "../utilities/formatCurrency"

// interface
type StoreItemProps = {
  id: number
  name: string
  price: number
  imgURL: string
}

export function StoreItem({id, name, price, imgURL}: StoreItemProps){
  const cartQuantity = 0;

  return (
  <Card className="h-100">
    <Card.Img variant="top" src={imgURL} height="200px" style={{objectFit: "cover"}}/>
    <Card.Body className="d-flex flex-column">
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="fs-2">{name}</span>
        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
      </Card.Title>
      
      <div className="mt-auto">
        {cartQuantity === 0 
        // 1st column
        ? (<Button className="w-100">+ Add to Cart</Button>) 
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
            <Button>-</Button>
            <div>
              <span className="fs-3">{cartQuantity}</span> in cart
            </div>
            {/* 3rd column */}
            <Button>+</Button>
            {/* 3rd column */}
          </div>
          <Button variant="danger" size="sm">Remove</Button>
          </div>
          )}

      </div>
    </Card.Body>
  </Card>
  )
}