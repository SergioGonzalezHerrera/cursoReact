
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Potterhead</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/categoria/Varitas'>Varitas</Nav.Link>
                        <Nav.Link as={Link} to='/categoria/Varios'>Varios</Nav.Link>
                        <NavDropdown title="Vestimenta" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/categoria/VestimentaGryffindor'>Gryffindor</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/categoria/VestimentaRavenclaw'>Ravenclaw</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/categoria/VestimentaHufflepuff'>Hufflepuff</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/categoria/VestimentaSlytherin'>Slytherin</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
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