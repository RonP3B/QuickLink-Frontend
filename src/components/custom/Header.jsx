import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, Container } from "react-bootstrap";
import useLogout from "../../hooks/custom/useLogout";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const logout = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Navbar
      className="banner-shadow"
      bg="white"
      expand="lg"
      expanded={isMenuOpen}
      ref={menuRef}
    >
      <Container>
        <Navbar.Brand style={{ fontWeight: "bold", color: "#f8961f" }}>
          <Image
            src={Logo}
            width={30}
            height={30}
            className="d-inline-block align-top me-2"
          />
          QuickLink
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav onClick={() => setIsMenuOpen(false)}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/add-link">
              Add
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link onClick={logout}>Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
