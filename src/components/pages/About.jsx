import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h1 className="text-center mt-3 mb-2">About the page</h1>
      <Row className="justify-content-center mt-3 mb-3">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Welcome to QuickLink
              </Card.Title>
              <Card.Text>
                QuickLink is a powerful tool that allows you to generate
                shortcut links for your favorite websites. With QuickLink, you
                can easily access your frequently visited websites with just a
                click, saving your time and effort.
              </Card.Text>
              <Card.Text>
                Whether you&apos;re a student, a professional, or simply a web
                enthusiast, QuickLink is designed to streamline your online
                experience. Say goodbye to long, complicated URLs and hello to
                personalized, convenient shortcuts.
              </Card.Text>
              <Card.Text>
                Get started with QuickLink today and revolutionize the way you
                browse the web. Create your own custom shortcuts and access your
                favorite websites with ease. Experience the power of simplicity
                with QuickLink!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
