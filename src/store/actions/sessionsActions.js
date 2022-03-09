export const SET_SESSIONS = " SET_SESSIONS";

export const setSessionsAction = (sessions) => (dispatch) =>
  dispatch({ type: SET_SESSIONS, payload: sessions });
