export const ACTIONS = {
    GET_SEARCHED_USERS: 'GET_SEARCHED_USERS',
    GET_PREV_CHATS:'GET_PREV_CHATS'
}


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