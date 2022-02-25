import { ListGroup } from "react-bootstrap";
import { useEffect } from "react";
import logo from "./assets/photo.png";
import { useDispatch } from "react-redux";
import { selectSearchedUser } from "../redux/actions";

const SearchedUsers = ({ searchedUserName, inputValue }) => {
const dispatch = useDispatch()

const setSearchedUser=(username)=> {
  dispatch(selectSearchedUser(username))
}


useEffect(() => {
  setSearchedUser();
}, []);
  return (
    <>
      {inputValue &&
        searchedUserName.map((usr) => (
          <ListGroup className="rounded-pill">
            <ListGroup.Item
              className="text-info mt-5"
              style={{ backgroundColor: "#2B2B2B" }}
              onClick={()=> setSearchedUser(usr.username)}
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
