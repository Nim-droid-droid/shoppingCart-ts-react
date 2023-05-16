import { Row, Col } from "react-bootstrap"
import storeItems from "../data/items.json"

export function Store(){
  return(
    <>
      <h1>Store Page</h1>
      <Row>
        {storeItems.map(item => (
          <Col>{JSON.stringify(item)}</Col>
        ))
        }
      </Row>
    </>
  )
}