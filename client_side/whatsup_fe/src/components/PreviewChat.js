import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import logo from "./assets/photo.png";
import { useSelector, useDispatch } from "react-redux";
import { getPreviewsChat } from "../redux/actions";
import { setActiveChats } from "../redux/actions";

const PreviewChat = ({ inputValue }) => {
  // const [activeChat, setActiveChat] = useState('')
  const dispatch = useDispatch();
  const prevChats = useSelector((state) => state.users.prevChat);
  console.log("Previews chats", prevChats);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(getPreviewsChat(token));
  }, [token]);

  const setActiveChat = (username) => {
    dispatch(setActiveChats(username));
  };

  useEffect(() => {
    setActiveChat();
  }, []);
  const [title, setTitle] = useState("");
  return (
    <>
      {title ?  (
        <h3 className="text-light mt-4">Searched Users</h3>
      ):(
        <h3 className="text-light mt-4">Online Users</h3> &&
        prevChats &&
        !inputValue &&
        prevChats.map((chat) => (
          <ListGroup className="rounded-pill">
            <ListGroup.Item
              className="text-info mt-5"
              style={{ backgroundColor: "#2B2B2B" }}
              onClick={() => setActiveChat(chat.username)}
            >
              <img
                src={logo}
                style={{ width: "40px", height: "40px" }}
                className="p-1 rounded-pill"
                alt="logo"
              />
              {chat.username}
            </ListGroup.Item>
          </ListGroup>
        ))
      )}
    </>
  );
};
export default PreviewChat;
