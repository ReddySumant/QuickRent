import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function DashNav(){
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/admin" className="me-5">QuickRent Admin Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/add-admin">Add Admin</Nav.Link>
            <Nav.Link as={Link} to="/admin/add-category">Add Category</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}