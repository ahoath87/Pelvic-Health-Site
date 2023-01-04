const API_URL = "http://localhost:5000/api";

export const fetchMe = async (token) => {
  //   console.log("this is fetchme token", token);
  try {
    const response = await fetch(API_URL + "/users/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const user = await response.json();
    // console.log("this is fetchme data", user);

    return user;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  //   console.log("this is loginUser");
  const response = await fetch(API_URL + "/users/login", requestOptions);
  const data = await response.json();
  //   console.log("this is data", data.token);
  return data.token;
};

export const registerUser = async (username, password, name) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, name }),
  };
  const response = await fetch(API_URL + "/users/register", requestOptions);
  const data = await response.json();
  console.log("this is data in registerUSer", data);
  return data.token;
};
