export const ACTIONS = {
    GET_SEARCHED_USERS: 'GET_SEARCHED_USERS',
    GET_PREV_CHATS:'GET_PREV_CHATS',
    SET_ACTIVE_CHAT:'SET_ACTIVE_CHAT',
    SET_SEARCHED_USERS:'SET_SEARCHED_USERS',
}

export const selectSearchedUser =(username)=> {
    return async(dispatch)=> {
        dispatch({
            type:ACTIONS.SET_SEARCHED_USERS,
            payload:username
        })
    }
}


export const setActiveChats = (token, chatId) => {
    return async (dispatch) => {
        try {
            console.log("myToken", token);
            console.log("chatId::", chatId);
            const response = await fetch(`http://localhost:3001/chats/${chatId}`, {
            method:"GET",
            headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + token
                }
            })
            if(response.ok){
                const usersList = await response.json()
                console.log("UserListasdasdsasd:", usersList)
                dispatch({
                    type: ACTIONS.GET_PREV_CHATS,
                    payload: usersList
                })
            }
        } catch (error) {
            console.log(error);
        }
    };
  };
  

export const editMyProfile = {
  EDIT_MY_PROFILE: "EDIT_MY_PROFILE",
};

export const getPreviewsChat = (token)=> {
    return async(dispatch)=> {
        try {
            const response = await fetch("http://localhost:3001/chats", {
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer " + token
                }
            })
            if(response.ok){
                const users = await response.json()
                console.log(users);
                dispatch({
                    type: ACTIONS.GET_PREV_CHATS,
                    payload: users
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}

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
