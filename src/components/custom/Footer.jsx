import { Navbar, Nav, Container } from "react-bootstrap";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="banner-shadow"
      style={{ marginTop: "auto" }}
    >
      <Container className="justify-content-center justify-content-sm-between">
        <Navbar.Text className="me-3 py-0">
          QuickLink - Your shortcut to the web!
        </Navbar.Text>
        <Nav className="d-flex flex-column justify-content-center align-items-center align-lg-items-start flex-lg-row">
          <Navbar.Text className="me-lg-3 py-0">
            More about the creator:
          </Navbar.Text>
          <div className="d-flex">
            <Nav.Link
              href="https://t.me/RoniellPB"
              target="_blank"
              className="me-2 me-lg-0"
            >
              <FaTelegram size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/RonP3B"
              target="_blank"
              className="me-2 me-lg-0"
            >
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/roniell-p%C3%A9rez-967882229/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
