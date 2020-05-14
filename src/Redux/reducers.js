import { createStore } from "redux";

const initialState = {
    isSignUpOpen: false,
    isLogInOpen: false,
    isRegisterModalOpen: false,
    loggedIn: false,
    user: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                user: action.payload,
            };
        case "LOGGED_IN":
            return {
                ...state,
                loggedIn: action.payload,
            };
        case "IS_SIGN_UP_OPEN":
            return {
                ...state,
                isLogInOpen: false,
                isSignUpOpen: action.payload,
            };
        case "IS_LOG_IN_OPEN":
            return {
                ...state,
                isSignUpOpen: false,
                isLogInOpen: action.payload,
            };
        case "IS_REGISTER_MODAL_OPEN":
            return {
                ...state,
                isRegisterModalOpen: action.payload,
            };
        case "GENERAL_BUNDLE":
            return {
                ...state,
                ...action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

const store = createStore(rootReducer);
export default store;
