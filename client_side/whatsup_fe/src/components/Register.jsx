import NavBar from "./NavBar";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <NavBar />
      <Form>
        <NavBar />
        <Container className={"p-3"}>
          <Row>
            <Col lg={3} className={"m-1"}>
              <Form.Label>First Name</Form.Label>
            </Col>
            <Col lg={6} className={"m-1"}>
              <Form.Control placeholder="First name" />
            </Col>
            <Col lg={3} className={"m-1"}>
              <Form.Label>Last Name</Form.Label>
            </Col>
            <Col lg={6} className={"m-1"}>
              <Form.Control placeholder="Last name" />
            </Col>

            <Col lg={3} className={"m-1"}>
              <Form.Label>Email address</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
            {/* <Col lg={3} className={"m-1"}>
              <Form.Label>Password</Form.Label>
            </Col>
            <Col lg={6} className={"m-1"}>
              <Form.Control type="password" placeholder="Password" />
            </Col> */}
          </Row>
          <Row>
            <Col lg={9} style={{ textAlign: "end", margin: "5px" }}>
              <Button variant="dark">Login</Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Register;
