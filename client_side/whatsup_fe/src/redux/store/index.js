import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import setActiveChatReducer from '../reducer/setActiveChatReducer'
import userReducer from '../reducer/userReducer'


// ************** REDUX-THUNK MIDDLEWARE **************
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    users: {
        prevChat: [],
        searchedUsers:[],
        selectedUser:[],
    },
    chats:{
        selectedChat: "",
        list: [
            // {
            //     _id: "123456789",
            //     members: ["userId123", "userId456"],
            //     messages: [] // GET /chats/:id
            // },
            // {
            //     _id: "123456789",
            //     members: ["userId123", "userId456"],
            //     messages: []
            // },
            // {
            //     _id: "123456789",
            //     members: ["userId123", "userId456"],
            //     messages: []
            // },
        ]
    }
}

const rootReducer = combineReducers({
    users: userReducer,
    chats: setActiveChatReducer
})


const storeConfig = createStore(rootReducer, initialState, composeThatAlwaysWorks(applyMiddleware(thunk)))

export default storeConfig