import { useState } from "react";
import { Link } from "react-router-dom";
import useSignupFormik from "../../hooks/formiks/useSignupFormik";
import {
  Spinner,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import signupImage from "../../assets/images/signup.png";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const formik = useSignupFormik(setLoading);

  return (
    <Container fluid className="py-2">
      <Row className="justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Img
              variant="top"
              src={signupImage}
              style={{ width: "10rem", height: "10rem", margin: "0 auto" }}
            />
            <Card.Body>
              <h3 className="text-center mb-4">Signup</h3>
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

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    isInvalid={
                      formik.touched.confirmPassword &&
                      !!formik.errors.confirmPassword
                    }
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <Form.Control.Feedback type="invalid">
                        {formik.errors.confirmPassword}
                      </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="d-block mt-2 mx-auto"
                  style={{ width: "60%" }}
                  disabled={loading}
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
                      <span> Signing up...</span>
                    </>
                  ) : (
                    "Sign up"
                  )}
                </Button>
              </Form>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
