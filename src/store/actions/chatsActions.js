export const SET_CHATS = "SET_CHATS";
export const SET_READ_MESSAGE = "SET_READ_MESSAGE";

export const setChatsAction = (chats) => (dispatch) =>
  dispatch({ type: SET_CHATS, payload: chats });

export const setReadMessageAction = (id) => (dispatch) =>
  dispatch({ type: SET_READ_MESSAGE, payload: id });
