export const addUserToLocalStorage = (user, token) => {
    localStorage.setItem("dashboardUser", JSON.stringify(user));
    localStorage.setItem("dashboardToken", token);
};

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("dashboardUser");
    localStorage.removeItem("dashboardToken");
};

export const getUserFromLocalStorage = () => {
    return {
        user: localStorage.getItem("dashboardUser"),
        token: localStorage.getItem("dashboardToken"),
    };
};
