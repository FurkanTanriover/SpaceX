import ApiManager from "./ApiManager";
import Toast from "react-native-toast-message";

export const login = async (email, password) => {
  const showSuccessLoginAlert = async () => {
    await Toast.show({
      type: "success",
      text1: "Successfully logged in",
    });
  };

  const showErrorLoginAlert = () => {
    Toast.show({
      type: "error",
      text1: "Login failed ",
    });
  };

  try {
    const response = await ApiManager("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });
    console.log("response", response);
    showSuccessLoginAlert();
    return response.data.token;
  } catch (error) {
    showErrorLoginAlert();
    console.log("error", error);
  }
};

export const register = async (email, password) => {
  const showSuccessRegisterAlert = async () => {
    await Toast.show({
      type: "success",
      text1: "Account created successfully",
    });
  };

  const showErrorRegisterAlert = () => {
    Toast.show({
      type: "error",
      text1: "Account creation failed",
    });
  };

  try {
    const response = await ApiManager("/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    });
    showSuccessRegisterAlert();
    return response.data.token;
  } catch (error) {
    showErrorRegisterAlert();
    console.log(error);
  }
};
