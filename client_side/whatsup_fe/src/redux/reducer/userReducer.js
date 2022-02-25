import { initialState } from '../store'
import { ACTIONS } from '../actions'

const userReducer = (state = initialState.users, action)=> {
    switch(action.type){
        case ACTIONS.GET_SEARCHED_USERS:
            return{
                ...state,
                searchedUsers:action.payload
            }
        case ACTIONS.GET_PREV_CHATS:
            return{
                ...state,
                prevChat:action.payload
            }  
        case ACTIONS.SET_SEARCHED_USERS:
            return{
                ...state,
                selectedUser:action.payload
            }      
        default:return state
    }
}

export default userReducer