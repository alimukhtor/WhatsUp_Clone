import React, { useState } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const url = "http://localhost:3001/users/login";
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const users = await response.json()
       localStorage.setItem("accessToken", users.accessToken)
        navigate("/profile/me");
        setData({
          email: "",
          password: "",
        });
      } else {
        alert("Something went wrong!")
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleInput = (fieldName, value) => {
    setData({
      ...data,
      [fieldName]: value,
    });
  };

  return (
    <>
      <Form className="main-form" onSubmit={handleSubmit}>
        <Container className={"p-3"}>
        <h1 className="mb-5 text-light"><strong>Log in</strong></h1>
          <Row>
            <Col lg={3} className={"m-1"}>
              <Form.Label className="text-light">Email address</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={data.email}
                onChange={(e) => {
                  handleInput("email", e.target.value);
                }}
              />
            </Col>
            <Col lg={3} className={"m-1"}>
              <Form.Label className="text-light">Password</Form.Label>
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
              <Button variant="success" type="submit">
                Sign in
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default Login;
