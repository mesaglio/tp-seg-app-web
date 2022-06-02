import jwt_decode from "jwt-decode";

export const getToken = () => {
    return sessionStorage.getItem("token");
};

export const isLoggedIn = () => {
    return getToken() !== null;
};

export const isAdmin = () => {
    let token = getToken();
    let user = token ? jwt_decode(token) : null;

    return user?.isAdmin;
};

export const getUserRole = () => {
    return localStorage.getItem("role");
};

export const isEnterprise = () => {
    let role = getUserRole();
    return role === "Enterprise";
};

export const Roles = {
    Admin: "Admin",
    Enterprise: "Enterprise",
    User: "User",
};
