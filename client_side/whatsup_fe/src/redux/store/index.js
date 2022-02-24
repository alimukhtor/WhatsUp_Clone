import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/userReducer'


// ************** REDUX-THUNK MIDDLEWARE **************
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    users: {
        prevChat: [],
        searchedUsers:[]
    }
}

const rootReducer = combineReducers({
    users: userReducer,
})


const storeConfig = createStore(rootReducer, initialState, composeThatAlwaysWorks(applyMiddleware(thunk)))

export default storeConfig