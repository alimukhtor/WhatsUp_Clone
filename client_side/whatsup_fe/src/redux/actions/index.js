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
    return async(dispatch) => {
        try {
            let response = await fetch(`http://localhost:3001/users?q=${inputValue}`);
            if (response.ok) {
                let results = await response.json();
                dispatch({
                    type: ACTIONS.GET_SEARCHED_USERS,
                    payload: results
                })
            } else {
                console.log("error has ocuured");
            }
        } catch (error) {
            console.log(error);
        }
    };
}