import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../styles/logo.png'
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
          <Navbar.Brand>
           <img width="30" height="30" src={logo} alt='proShop'/>
            ProShop
            </Navbar.Brand>
            </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
<LinkContainer to={"/cart"}>
              <Nav.Link><FaShoppingCart />Cart</Nav.Link>
              </LinkContainer>

              <LinkContainer to={"/login"}>
              <Nav.Link ><FaUser />sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
