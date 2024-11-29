import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Navbar.Brand className="mx-auto text-center" href="/">Management</Navbar.Brand>
            <Nav className="ml-auto justify-content-sm-center">
                <Nav.Link as={Link} to="/">Users</Nav.Link>
                <Nav.Link as={Link} to="/books">Books</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;