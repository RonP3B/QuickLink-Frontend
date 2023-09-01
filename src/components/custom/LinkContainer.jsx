import { Link } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";
import useLinkDeletion from "../../hooks/custom/useLinkDeletion";
import { Row, Col, Card, Button, ButtonGroup, Badge } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaCopy } from "react-icons/fa";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const LinkContainer = (props) => {
  const { id, pageName, shortenedLink, setLinks, setLoading } = props;
  const clipboard = useClipboard();
  const handleDeletion = useLinkDeletion(setLoading, setLinks);
  const redirectLink = `${window.location.origin}/${shortenedLink}`;

  const copyToClipboard = (text) => {
    clipboard.copy(text);
    toast.success("Link copied to clipboard");
  };

  return (
    <Row className="mb-3">
      <Col>
        <Card>
          <Card.Header>
            <Card.Title className="text-center">
              <Badge bg="primary">Page:</Badge> {pageName}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div className="shortened-link me-2">
                <a href={redirectLink} target="_blank" rel="noreferrer">
                  {redirectLink}
                </a>
                <FaCopy onClick={() => copyToClipboard(redirectLink)} />
              </div>
              <div>
                <ButtonGroup>
                  <Button variant="light" as={Link} to={`/edit-link/${id}`}>
                    <FaEdit />
                  </Button>
                  <Button variant="light" onClick={() => handleDeletion(id)}>
                    <FaTrashAlt />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

LinkContainer.propTypes = {
  id: PropTypes.string.isRequired,
  pageName: PropTypes.string.isRequired,
  shortenedLink: PropTypes.string.isRequired,
  setLinks: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default LinkContainer;
