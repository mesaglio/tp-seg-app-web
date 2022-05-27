import jwt_decode from "jwt-decode";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isLoggedIn = () => {
  return true; //For testing
  //return getToken() !== null;
};

export const isAdmin = () => {
  let token = getToken();
  let user = token ? jwt_decode(token) : null;

  //return user?.isAdmin === "true";
  return true; //For testing
};
