import { combineReducers } from "redux";
import { chatReducer } from "./chatReducer";
import { sessionReducer } from "./sessionsReducer";

export const rootReducer = combineReducers({
  chatsState: chatReducer,
  sessionState: sessionReducer,
});
