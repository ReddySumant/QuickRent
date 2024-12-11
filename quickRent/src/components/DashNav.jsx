import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function DashNav(){
    return (
        <Navbar bg="light" data-bs-theme="light" style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        <Container>
          <Navbar.Brand as={Link} to="/admin" className="me-5"><img 
              src="/QUICKRENT LOGOS/cv.png" 
              alt="Quick Rent" 
              height="50"
            /></Navbar.Brand>
          <Nav className="ms-auto align-items-center nav-links">
            <Nav.Link as={Link} to="/admin/add-admin" style={{ fontSize: "1.4rem" }}>Add Admin</Nav.Link>
            <Nav.Link as={Link} to="/admin/add-category" style={{ fontSize: "1.4rem" }}>Add Category</Nav.Link>
            <Nav.Link as={Link} to="/" style={{ fontSize: "1.4rem" }}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}