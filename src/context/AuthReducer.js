import {
    LOGIN_BEGIN,
    LOGIN_ERROR,
    LOGIN,
    CLEAR_ALERT,
    LOGOUT,
} from "./AuthActions";

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_BEGIN:
            return { ...state, isLoading: true };
        case LOGIN:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                token: action.payload.token,
                showAlert: true,
                alertType: "success",
                alertText: "Login Successful! Redirecting...",
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                showAlert: true,
                alertType: "danger",
                alertText: action.payload,
            };
        case LOGOUT:
            return { ...state, user: null, token: null };
        case CLEAR_ALERT:
            return {
                ...state,
                showAlert: false,
                alertText: "",
                alertType: "",
            };

        default:
            throw new Error(`No such action: ${action.type}`);
    }
};

export default authReducer;
