import {combineReducers, legacy_createStore as createStore} from "redux";
import messagesReducer from "./messagesReducer";
import ProfileReducer from "./ProfileReducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    profilePage: ProfileReducer
    });

let store = createStore(reducers);

export default store;