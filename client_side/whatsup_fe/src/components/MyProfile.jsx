import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Form, Modal, Button } from "react-bootstrap";
import { BsFillHddStackFill } from "react-icons/bs";
import logo from "./assets/photo.png";
const MyProfile = () => {
  const url = "http://localhost:3001/users/me";

  const [data, setData] = useState([]);
  const [smShow, setSmShow] = useState(false);

  const fetchProfile = async (e) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const newData = await response.json();
      console.log(newData);
      setData(newData);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div style={{ backgroundColor: "#181818" }}>
      <Container>
        <Row style={{ height: "95vh" }}>

            {
              data &&
          <Col md={4} style={{ backgroundColor: "#2B2B2B" }}>
            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  User Account
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="text-muted">Username:</p>
                <p className="text-dark">{data.username}</p>
                <hr/>
                <p className="text-muted">Email:</p>
                <p className="text-dark">{data.email}</p>
                <hr/>
                <div className="d-flex justify-content-center">
                <Button variant="secondary" className="rounded-pill">Sign Out</Button>

                </div>
              </Modal.Body>
            </Modal>
            <div className="d-flex inline-block">
              <BsFillHddStackFill
               onClick={() => setSmShow(true)}
                className="mt-4 text-light inline-block"
                style={{ fontSize: "37px" }}
              />
              <Form.Control
                type="search"
                className="rounded-pill mt-4 ml-3"
                placeholder="search..."
              />
            </div>
            <ListGroup className="rounded-pill">
              <ListGroup.Item className="text-danger mt-5">
                No users yet!
              </ListGroup.Item>
            </ListGroup>
          </Col>
            }

          <Col md={8} style={{ backgroundColor: "#0F0F0F" }}>
            <h1>WhatsUp!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
