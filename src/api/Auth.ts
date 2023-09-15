import ApiManager from "./ApiManager";
import Toast from "react-native-toast-message";

export const login = async (email, password) => {
  const showSuccesAlert = async () => {
    await Toast.show({
      type: "success",
      text1: "Giriş başarılı",
    });
  };

  const showErrorAlert = () => {
    Toast.show({
      type: "error",
      text1: "Şifre veya email yanlış",
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
    showSuccesAlert();
    return response.data.token;
  } catch (error) {
    showErrorAlert();
    console.log("error", error);
  }
};

export const register = async (email, password) => {
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
    return response.data.token;
  } catch (error) {
    console.log(error);
  }
};
