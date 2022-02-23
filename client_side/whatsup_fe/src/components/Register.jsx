import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const url = "http://localhost:3001/users/register";
  const [data, setData] = useState({
    username:"",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        alert("Success");
      }
    });
  };

  const handleChange = (fieldName, value) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="main-form">
        <Container className={"p-3"}>
          <Row>
          <Col lg={3} className={"m-1"}>
              <Form.Label>Username</Form.Label>
            </Col>
            <Col lg={6} className={"m-1"}>
              <Form.Control
                id="email"
                type="text"
                placeholder="Enter username"
                value={data.username}
                onChange={(e) => {handleChange("username", e.target.value)}}
              />
            </Col>
            <Col lg={3} className={"m-1"}>
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col lg={6} className={"m-1"}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={data.email}
                onChange={(e) =>{ handleChange("email", e.target.value)}}
              />
            </Col>

            <Col lg={3} className={"m-1"}>
              <Form.Label>Password</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                id="password"
                type="password"
                placeholder="Enter password"
                value={data.password}
                onChange={(e) => {handleChange("password", e.target.value)}}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={9} style={{ textAlign: "end", margin: "5px" }}>
              <Button variant="dark" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Register;
