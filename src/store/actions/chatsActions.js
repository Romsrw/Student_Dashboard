export const SET_CHATS = "SET_CHATS";

export const setChatsAction = (chats) => (dispatch) =>
  dispatch({ type: SET_CHATS, payload: chats });
