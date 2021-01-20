import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers( {
    messagesComp: reducerMessages,
    profileComp: reducerProfile
})

let store = createStore(reducers);

export default  store;