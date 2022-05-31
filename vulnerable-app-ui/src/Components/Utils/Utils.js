import jwt_decode from "jwt-decode";

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const isLoggedIn = () => {
  return true; //TODO: For testing
  //return getToken() !== null;
};

export const isAdmin = () => {
  let token = getToken();
  let user = token ? jwt_decode(token) : null;

  //return user?.isAdmin === "true";
  return true; //TODO: For testing
};

export const getUserRole = () => {
  //return localStorage.getItem("role");
  return "Admin"; //TODO: For testing
};

export const Roles = {
  Admin: "Admin",
  Enterprise: "Enterprise",
  User: "User",
};
