export const ACTIONS = {
  GET_SEARCHED_USERS: "GET_SEARCHED_USERS",
};

export const editMyProfile = {
  EDIT_MY_PROFILE: "EDIT_MY_PROFILE",
};

export const getSearchedUsers = (inputValue) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`http://localhost:3001/users?q=${inputValue}`);
      if (response.ok) {
        console.log("Response:", response);
        let results = await response.json();
        console.log(results);
        dispatch({
          type: ACTIONS.GET_SEARCHED_USERS,
          payload: results,
        });
      } else {
        console.log("error has ocuured");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editingMyProfile = () => {
  return async (dispatch) => {
    try {
      let getResponse = await fetch(`http://localhost:3001/users/me`);
      if (getResponse.ok) {
        console.log(getResponse);
        let editData = await getResponse.json();
        console.log(editData);
        dispatch({
          type: ACTIONS.EDIT_MY_PROFILE,
          payload: editData,
        });
      } else {
        console.log("ERROR in editing the profile");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
