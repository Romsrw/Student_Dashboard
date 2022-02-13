import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  chatsState: chatReducer,
});
