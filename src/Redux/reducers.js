import { createStore } from "redux";

const initialState = {
    loggedIn: false,
    user: false,
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
