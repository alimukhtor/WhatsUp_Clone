import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import myProfileReducer from '../reducer/myProfileReducer';
import setActiveChatReducer from '../reducer/setActiveChatReducer'
import userReducer from '../reducer/userReducer'


// ************** REDUX-THUNK MIDDLEWARE **************
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  users: {
    data: [],
    searchedUsers: [],
  },
  myProfile: {
    element: [],
  },
  chats :{
      selectedChat: null,
      list: []
  }
};

const rootReducer = combineReducers({
  users: userReducer,
  myProfile: myProfileReducer,
  chats: setActiveChatReducer
});

const storeConfig = createStore(
  rootReducer,
  initialState,
  composeThatAlwaysWorks(applyMiddleware(thunk))
);

export default storeConfig;
