import { SET_SESSIONS } from "./../actions/sessionsActions";

const initialState = {
  sessions: [],
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SESSIONS:
      return { ...state, sessions: action.payload };

    default:
      return state;
  }
};
