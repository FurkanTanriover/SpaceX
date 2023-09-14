import axios from "axios";
import ApiManager from "./ApiManager";
import { useDispatch } from "react-redux";
import { loadToken } from "../utils/storage";

export const get = async (url, dispatch, success) => {
  const token = await loadToken();
  axios({
    method: "get",
    url,
    headers: {
      contentType: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      console.log("GET SUCCESS: => ", url, response.data);
      dispatch({ type: success, payload: response.data });
    })
    .catch((err) => {
      console.log("GET ERROR: => ", url, err?.response);
    });
};
