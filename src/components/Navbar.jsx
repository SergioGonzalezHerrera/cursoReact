import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Potterhead</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/category/Varitas'>Varitas</Nav.Link>
                        <Nav.Link as={Link} to='/category/Varios'>Varios</Nav.Link>
                        <NavDropdown title="Vestimenta" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/category/VestimentaGryffindor'>Gryffindor</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/VestimentaRavenclaw'>Ravenclaw</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/VestimentaHufflepuff'>Hufflepuff</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/category/VestimentaSlytherin'>Slytherin</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/cart' ><CartWidget /> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar