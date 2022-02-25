import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import logo from "./assets/photo.png";
import { useSelector, useDispatch } from "react-redux";
import { getPreviewsChat } from "../redux/actions";
import { setActiveChats } from "../redux/actions";

const PreviewChat = ({ inputValue }) => {
  const dispatch = useDispatch();
  const prevChats = useSelector((state) => state.users.prevChat);
  console.log("Previews chats", prevChats);
  const token = localStorage.getItem("accessToken");
  
  useEffect(() => {
    dispatch(getPreviewsChat(token));
  }, [token]);
  
  
  const setActiveChat = (chatId, token) => {
    dispatch(setActiveChats(chatId, token));
  };

  useEffect(() => {
    setActiveChat(token);
  }, [token]);

  const [title, setTitle] = useState("");
  return (
    <>
      {
        prevChats &&
        !inputValue &&
        prevChats.map((chat) => (
          <ListGroup className="rounded-pill">
            <ListGroup.Item
              className="text-info mt-5"
              style={{ backgroundColor: "#2B2B2B" }}
              onClick={() => setActiveChat(chat._id)}
            >
              <img
                src={logo}
                style={{ width: "40px", height: "40px" }}
                className="p-1 rounded-pill"
                alt="logo"
              />
              {chat.members[1].username}
            </ListGroup.Item>
          </ListGroup>
        ))}
    </>
  );
};
export default PreviewChat;
