import { initialState } from '../store'
import { ACTIONS } from '../actions'


const setActiveChatReducer =(state = initialState.chats, action)=> {
    switch(action.type){
        case ACTIONS.SET_ACTIVE_CHAT:
          return {
            ...state,
            list: [action.payload],
          };
        //case actions.set_history
        default: return state
    }
}

export default setActiveChatReducer