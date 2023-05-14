import { Container, Nav, Navbar as NavBarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export function NavBAR(){
  
  return(
    <NavBarBS>
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
          <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
        </Nav>

        cartIcon goes here

      </Container>
    </NavBarBS>
    
  )
}