import { SET_CHATS } from "./../actions/chatsActions";

const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload };

    default:
      return state;
  }
};
