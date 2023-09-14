import ApiManager from "./ApiManager";
export const login = async (email, password) => {
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
    return response.data.token;
  } catch (error) {
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
