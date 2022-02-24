import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import { BsFillHddStackFill } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { CgSoftwareUpload } from "react-icons/cg";
import logo from "./assets/photo.png";
import { useSelector, useDispatch } from "react-redux";
import { getSearchedUsers } from "../redux/actions";
import {useNavigate} from 'react-router-dom'

const MyProfile = () => {
  // *************** USER IMPLEMENTATION ****************
  const url = "http://localhost:3001/users/me";
  const [data, setData] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null)
  const [imageSrc, setImageSrc] = useState(null)

  const fetchProfile = async () => {
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

  const history= useNavigate()
  const logout =()=>{
    localStorage.clear()
    history("/login")
  }

  // ********************* SEARCH BY USERNAMES ****************
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [getUsername, setUsername] = useState("");
  const users = useSelector((state) => state.users.inputValue);
  const searchedUserName = useSelector((state) => state.users.searchedUsers);

  useEffect(() => {
    dispatch(getSearchedUsers(inputValue));
  }, [inputValue]);

  return (
    <div style={{ backgroundColor: "#181818" }}>
      <Container>
        <Row style={{ height: "95vh" }}>
          <Col md={4} style={{ backgroundColor: "#2B2B2B" }}>
            {data && (
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
                  <hr />
                  <p className="text-muted">Email:</p>
                  <p className="text-dark">{data.email}</p>
                  <hr />
                  <div className="d-flex justify-content-center">
                    <Button variant="secondary" className="rounded-pill" onClick={logout}>
                      Sign Out
                    </Button>
                  </div>
                </Modal.Body>
              </Modal>
            )}
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            {searchedUserName &&
              searchedUserName.map((usr) => (
                <>
                  <ListGroup className="rounded-pill">
                    <ListGroup.Item
                      className="text-info mt-5"
                      style={{ backgroundColor: "#2B2B2B" }}
                    >
                      <img
                        src={logo}
                        style={{ width: "40px", height: "40px" }}
                        className="p-1 rounded-pill"
                      />
                      {usr.username}
                    </ListGroup.Item>
                  </ListGroup>
                </>
              ))}
          </Col>
          <Col
            md={8}
            style={{ backgroundColor: "#0F0F0F" }}
            // className="d-flex flex-column justify-content-between"
          >
            {/* User Header */}
            <div className="ali">
              <img
                src={logo}
                style={{ width: "40px", height: "40px" }}
                className="p-1 rounded-pill"
              />
            </div>
            {/* MESSAGE BOX */}
              <ListGroup className="message-form">
                <ListGroup.Item
                  className="text-info mt-5"
                  style={{ backgroundColor: "#2B2B2B" }}
                >
                  <img
                    src={logo}
                    style={{ width: "40px", height: "40px" }}
                    className="p-1 rounded-pill"
                  />
                  <strong>SenderName</strong>
                  <span className="mx-1"> | </span>
                  <span>Text</span>
                  <span className="ml-2" style={{ fontSize: "0.7rem" }}>
                    {/* {new Date(message.timestamp).toLocaleTimeString("en-US")} */}
                  </span>
                </ListGroup.Item>
              </ListGroup>

            {/* MESSAGE SEND INPUT */}

            <Form className="input-form">
              <div className="d-flex inline-block position-relative">
                <Form.Control
                  type="text"
                  placeholder="Drop your mesage"
                  className="rounded-pill text-light"
                  style={{ backgroundColor: "#2B2B2B" }}
                />
                <Button variant="info" className="rounded-pill ml-2">
                  <MdSend className="mb-1"  />
                
    </Button>
                <Button
                  variant=""
                  className="rounded-pill text-light position-absolute mt-n1"
                  style={{ left: "665px", fontSize: "20px", boxShadow: "none" }}
                >
                  <CgSoftwareUpload className="mb-1" />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyProfile;
