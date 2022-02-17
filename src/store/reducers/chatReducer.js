import { SET_CHATS, SET_READ_MESSAGE } from "./../actions/chatsActions";

const initialState = {
  chats: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHATS:
      return { ...state, chats: action.payload };
    case SET_READ_MESSAGE:
      return {
        ...state,
        chats: state.chats.map((chat) =>
          chat.id === action.payload
            ? { ...chat, unReadMessagesCount: 0 }
            : chat
        ),
      };

    default:
      return state;
  }
};
