import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand href="#home">WhatsApp Clone</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Link to="/register">
          <div className={location.pathname === "/register" ? " active" : ""}>
          <Button variant="info" className="mr-3">Register</Button>
          </div>
        </Link>
        <Link to="/login">
          <div className={location.pathname === "/login" ? " active" : ""}>
          <Button variant="info">Log in</Button>
          </div>
        </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
