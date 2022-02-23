import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
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
      if (response.ok) {
        navigate("/login")
        setData({
          username:"",
          email:"",
          password:""
        })
      }else{
        alert("Something went wrong :(")
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
            <h1 className="mb-5 text-light"><strong>Register</strong></h1>
          <Row>
          <Col lg={3} className={"m-1"}>
              <Form.Label className="text-light"><strong>Username</strong></Form.Label>
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
              <Form.Label className="text-light"><strong>Email address</strong></Form.Label>
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
              <Form.Label className="text-light"><strong>Password</strong></Form.Label>
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
              <Button variant="success" type="submit">
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
