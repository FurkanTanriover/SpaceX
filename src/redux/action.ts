import { login as apiLogin, register as apiRegister } from "../api/Auth"; // API işlevleri
import { get } from "../api/Fetch";
import { BASE_URL, GET_RECENT_LAUNCH, GET_UPCOMING_EVENTS } from "../utils/constants";
import { saveToken } from "../utils/storage";
import { SET_IS_AUTHENTICATING, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS, SET_TOKEN } from "./types";

export const setToken = (string) => ({
  type: SET_TOKEN,
  payload: string,
});

export const deleteToken = () => ({
  type: SET_TOKEN,
  payload: null,
});

export const setIsAuthenticating = (bool) => ({
  type: SET_IS_AUTHENTICATING,
  payload: bool,
})

// Login işlemi
export const login = (email: string, password: string) => async (dispatch) => {
  try {
    const token = await apiLogin(email, password);
    saveToken(token);
    dispatch({ type: LOGIN_SUCCESS, payload: token, isAuth: true });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

// Kayıt işlemi
export const register = (email: string, password: string) => async (dispatch) => {
  try {
    const token = await apiRegister(email, password);
    dispatch({ type: REGISTER_SUCCESS, payload: token });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const getUpcomingEvents = (dispatch) => {
  return get(BASE_URL.concat("/feed/events"), dispatch, GET_UPCOMING_EVENTS);
};

export const getRecentLaunch = (dispatch) => {
  return get(BASE_URL.concat("/feed"), dispatch, GET_RECENT_LAUNCH);
};
