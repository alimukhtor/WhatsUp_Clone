import NavBar from "./NavBar";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const url = "http://localhost:3001/users/register";
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
      if (response.status === 200) {
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

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };
  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <NavBar />
        <Container className={"p-3"}>
          <Row>
            <Col lg={3} className={"m-1"}>
              <Form.Label>Email address</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                id="email"
                onChange={(e) => handleChange(e)}
                // value={data.email}
                type="email"
                placeholder="Enter email"
              />
            </Col>

            <Col lg={3} className={"m-1"}>
              <Form.Label>Password</Form.Label>
            </Col>

            <Col lg={6} className={"m-1"}>
              <Form.Control
                id="password"
                onChange={(e) => handleChange(e)}
                // value={data.email}
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

export default Register;
