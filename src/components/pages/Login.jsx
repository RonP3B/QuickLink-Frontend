import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/persitance/useAuth";
import loginImage from "../../assets/images/lightning.jpg";
import useLoginFormik from "../../hooks/formiks/useLoginFormik";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Spinner,
} from "react-bootstrap";

const LoginPage = () => {
  const { setAuthToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const formik = useLoginFormik(setLoading, setAuthToken);

  return (
    <Container fluid className="py-2">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Img
              variant="top"
              src={loginImage}
              style={{ width: "14rem", height: "8rem", margin: "0 auto" }}
            />
            <Card.Body>
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    isInvalid={formik.touched.email && !!formik.errors.email}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    isInvalid={
                      formik.touched.password && !!formik.errors.password
                    }
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="d-block mt-2 mx-auto"
                  disabled={loading}
                  style={{ width: "60%" }}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span> logging in...</span>
                    </>
                  ) : (
                    "Log in"
                  )}
                </Button>
              </Form>
              <p className="text-center mt-3">
                Don&apos;t have an account? <Link to="/signup">Sign up</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
