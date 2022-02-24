export const ACTIONS = {
    GET_SEARCHED_USERS: 'GET_SEARCHED_USERS'
}




export const getSearchedUsers = (inputValue) => {
    return async(dispatch) => {
        try {
            let response = await fetch(`http://localhost:3001/users?q=${inputValue}`);
            if (response.ok) {
                console.log("Response:", response);
                let results = await response.json();
                console.log(results);
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