import { Link } from "react-router-dom";
import AnimateHeight from "react-animate-height";
import { BsLink45Deg } from "react-icons/bs";
import useFilterLink from "../../hooks/custom/useFilterLink";
import useLinksData from "../../hooks/custom/useLinksData";
import LinkContainer from "../custom/LinkContainer";
import {
  Spinner,
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
} from "react-bootstrap";

const HomePage = () => {
  const { links, loading, setLinks, setLoading } = useLinksData();
  const { filterText, height, setHeight, handleFilterChange, filteredLinks } =
    useFilterLink(links);

  if (loading) {
    return <Spinner animation="border" variant="warning" />;
  }

  if (links.length === 0) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <BsLink45Deg size={120} />
            <p>No links available.</p>
            <Button as={Link} to="add-link" className="mb-2">
              Add link
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Button as={Link} to="add-link" className="mb-2 mt-4 me-2">
        Add link
      </Button>
      <Button
        className="mb-2 mt-4"
        aria-expanded={height !== 0}
        aria-controls="example-panel"
        onClick={() => setHeight(height === 0 ? "auto" : 0)}
      >
        {height === 0 ? "Add filter" : "Remove filter"}
      </Button>
      <AnimateHeight duration={500} height={height}>
        <Card className="mb-2 mt-4 mx-auto" style={{ maxWidth: "60%" }}>
          <Card.Body>
            <Form>
              <Form.Group controlId="filterPageName">
                <Form.Label>Filter by page name:</Form.Label>
                <Form.Control
                  type="text"
                  value={filterText}
                  onChange={handleFilterChange}
                  placeholder="Enter page name"
                />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </AnimateHeight>
      <h1 className="text-center">List of links</h1>
      {(filteredLinks.length > 0 ? filteredLinks : links).map(
        ({ id, pageName, shortenedLink }) => (
          <LinkContainer
            key={id}
            id={id}
            shortenedLink={shortenedLink}
            pageName={pageName}
            setLinks={setLinks}
            setLoading={setLoading}
          />
        )
      )}
    </Container>
  );
};

export default HomePage;
