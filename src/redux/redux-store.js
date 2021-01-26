import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";
import {combineReducers, createStore} from "redux";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers( {
    messagesComp: reducerMessages,
    profileComp: reducerProfile,
    usersComp: reducerUsers
})

let store = createStore(reducers);

export default  store;