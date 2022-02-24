import { ListGroup } from "react-bootstrap";
import logo from "./assets/photo.png";

const SearchedUsers = ({ searchedUserName, inputValue }) => {
  return (
    <>
      {inputValue &&
        searchedUserName.map((usr) => (
          <ListGroup className="rounded-pill">
            <ListGroup.Item
              className="text-info mt-5"
              style={{ backgroundColor: "#2B2B2B" }}
            >
              <img
                src={logo}
                style={{ width: "40px", height: "40px" }}
                className="p-1 rounded-pill"
                alt="logo"
              />
              {usr.username}
            </ListGroup.Item>
          </ListGroup>
        ))}
    </>
  );
};
export default SearchedUsers;
