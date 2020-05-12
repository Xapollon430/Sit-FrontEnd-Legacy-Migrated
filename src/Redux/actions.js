export const changeIsSignUpOpen = (isSignUpOpen) => {
    return {
        type: "IS_SIGN_UP_OPEN",
        payload: isSignUpOpen,
    };
};

export const changeIsLogInOpen = (isLogInOpen) => {
    return {
        type: "IS_LOG_IN_OPEN",
        payload: isLogInOpen,
    };
};

export const changeIsRegisterModalOpen = (isRegisterModalOpen) => {
    return {
        type: "IS_REGISTER_MODAL_OPEN",
        payload: isRegisterModalOpen,
    };
};

export const changeLoggedIn = (loggedIn) => {
    return {
        type: "LOGGED_IN",
        payload: loggedIn,
    };
};

export const changeUser = (user) => {
    return {
        type: "USER",
        payload: user,
    };
};

export const generalDispatchBundler = (payload) => {
    return {
        type: "GENERAL_BUNDLE",
        payload: { ...payload },
    };
};
