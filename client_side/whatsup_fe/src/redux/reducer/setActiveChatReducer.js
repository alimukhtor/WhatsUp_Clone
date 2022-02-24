import { initialState } from '../store'
import { ACTIONS } from '../actions'


const setActiveChatReducer =(state = initialState.chats, action)=> {
    switch(action.type){
        case ACTIONS.SET_ACTIVE_CHAT:
          return {
            ...state,
            selectedChat: [...state.selectedChat, action.payload],
          };
        default: return state
    }
}

export default setActiveChatReducer