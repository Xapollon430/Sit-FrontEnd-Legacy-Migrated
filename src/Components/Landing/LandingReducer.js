const initialReducerState = {
    isModalOpen: false,
    isLogInOpen: false,
    isSignUpOpen: false,
};

export default LandingReducer = (state = initialReducerState, action) => {
    switch (action.type) {
        case "IS_MODAL_OPEN":
            return {
                ...state,
                isModalOpen: action.payload,
            };
        case "IS_LOG_IN_OPEN":
            return {
                ...state,
                isSignUpOpen: false,
                isLogInOpen: action.payload,
            };
        case "IS_SIGN_UP_OPEN":
            return {
                ...state,
                isLogInOpen: false,
                isSignUpOpen: action.payload,
            };
    }
};

export const changeIsModalOpen = (isModalOpen) => {
    return {
        type: "IS_MODAL_OPEN",
        payload: isModalOpen,
    };
};

export const changeIsLogInOpen = (isLogInOpen) => {
    return {
        type: "IS_LOG_IN_OPEN",
        payload: isLogInOpen,
    };
};

export const changeIsSignUpOpen = (isSignUpOpen) => {
    return {
        type: "IS_SIGN_UP_OPEN",
        payload: isSignUpOpen,
    };
};
