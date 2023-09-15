import { GET_RECENT_LAUNCH, GET_UPCOMING_EVENTS } from "../utils/constants";
import { deleteToken, saveToken } from "../utils/storage";
import { DELETE_TOKEN, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, SET_IS_AUTHENTICATING, SET_IS_REGISTER_SUCCESS, SET_TOKEN } from "./types";

const initialState = {
  token: null,
  error: null,
  data: null,
  upcomingEvents: [],
  recentLaunch: [],
  isAuth: false,
  isRegisterSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      console.log("SET_TOKEN", action.payload);
      saveToken(action.payload);
      return {
        ...state,
        token: action.payload,
      };

    case DELETE_TOKEN:
      deleteToken();
      return {
        ...state,
        token: null,
      };
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null, isAuth: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, token: action.payload, error: null, isRegisterSuccess: action.payload };
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
    case SET_IS_AUTHENTICATING:
      return {
        ...state,
        isAuth: action.payload,
      };
      case SET_IS_REGISTER_SUCCESS:
        return {
          ...state,
          isRegisterSuccess: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
