import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyProfile = () => {
  const url = "http://localhost:3001/users/me";
  const image_url =
    "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProfile = async (e) => {
      const response = fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const newData = await response.json;
      setData(newData.Id);
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4} style={{ backgroundColor: "grey", height: "100vh" }}>
            <h5
              style={{
                backgroundColor: "#075e54",
                width: "100%",
                height: "60px",
                padding: "10px",
                margin: "5px",
              }}
            >
              Profile
            </h5>

            <div
              style={{
                padding: "20px",
                marginLeft: "20px",
                margin: "25px",
                borderRadius: "50%",
                width: "230px",
                height: "230px",
                backgroundImage: `url(${image_url})`,
                justifyContent: "center",
              }}
            ></div>
            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
                // margin: "10px",
                height: "80px",
                textAlign: "left",
              }}
            >
              <h6 style={{ paddingLeft: "5px , margin:10px" }}>Your Name</h6>
              <h6 style={{ paddingLeft: "5px , margin:10px" }}>Mansi</h6>
            </div>
            <p style={{ width: "100%", padding: "5px" }}>
              This is not your username or pin.This name would be visible to
              your WhatsApp contants.
            </p>

            <div
              style={{
                backgroundColor: "white",
                width: "100%",
                padding: "10px",
                // margin: "10px",
                height: "80px",
                textAlign: "left",
              }}
            >
              <h6 style={{ paddingLeft: "5px , margin:10px" }}>About</h6>
              <h6 style={{ paddingLeft: "5px , margin:10px" }}>
                Hey there, I'm using WhatsApp
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
