import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { TbError404Off } from "react-icons/tb";

const NotFound = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <TbError404Off size={120} />
          <h1>Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            Return Home
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
