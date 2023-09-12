import { GET_RECENT_LAUNCH, GET_UPCOMING_EVENTS } from "../utils/constants";
import { saveToken } from "../utils/storage";
import { LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, FETCH_SUCCESS, FETCH_FAILURE, SET_TOKEN } from "./types";

const initialState = {
  token: null,
  error: null,
  data: null,
  upcomingEvents: [],
  recentLaunch: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      saveToken(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return { ...state, token: action.payload, error: null };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return { ...state, token: null, error: action.payload || "Bir hata oluştu" };
    case GET_UPCOMING_EVENTS:
      return {
        ...state,
        upcomingEvents: action.payload,
      };
    case GET_RECENT_LAUNCH:
      return {
        ...state,
        recentLaunch: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
