import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

const Login = () => {
  const url = "http://localhost:3001/users/login";
  const [data, setData] = useState({
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
      if (response.ok) {
        setData({
          email: "",
          password: "",
        });
        alert("Success");
      }
    });
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // return response.json();
  };

  const handleInput = (fieldName, value) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  return (
    <>
      <Form className="main-form">
        <Container className={"p-3"}>
          <Row>
            <Col lg={3} className={"m-1"}>
              <Form.Label>Email address</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={data.email}
                onChange={(e) => {
                  handleInput("password", e.target.value);
                }}
              />
            </Col>
            <Col lg={3} className={"m-1"}>
              <Form.Label>Password</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                id="password"
                value={data.password}
                onChange={(e) => {
                  handleInput("password", e.target.value);
                }}
                type="password"
                placeholder="Enter password"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={9} style={{ textAlign: "end", margin: "5px" }}>
              <Button variant="dark" onClick={(e) => handleSubmit(e)}>
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Login;
