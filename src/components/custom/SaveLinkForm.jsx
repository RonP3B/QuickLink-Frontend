import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Spinner } from "react-bootstrap";
import { FiLink2 } from "react-icons/fi";
import PropTypes from "prop-types";

const SaveLinkForm = ({ id, formik, loading }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card className="mb-3 mt-3">
        <Card.Header className="d-flex justify-content-center align-items-center">
          <FiLink2 className="me-2" size={35} />
          <Card.Title className="mb-0">
            {id ? "Edit Link" : "Create Link"}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="pageName">
              <Form.Label>Page Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Page Name"
                {...formik.getFieldProps("pageName")}
                isInvalid={formik.touched.pageName && formik.errors.pageName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.pageName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="link">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Link"
                {...formik.getFieldProps("link")}
                isInvalid={formik.touched.link && formik.errors.link}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.link}
              </Form.Control.Feedback>
            </Form.Group>

            <Container className="mt-2 text-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => navigate(-1)}
                style={{ width: "35%" }}
              >
                Go Back
              </Button>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "35%" }}
                disabled={loading}
              >
                {loading && (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                  </>
                )}
                {id ? "Update" : "Create"}
              </Button>
            </Container>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

SaveLinkForm.propTypes = {
  id: PropTypes.string,
  formik: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SaveLinkForm;
