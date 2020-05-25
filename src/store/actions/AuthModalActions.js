export const changeIsModalOpen = (isModalOpen) => {
    return {
        type: "IS_MODAL_OPEN",
        payload: isModalOpen,
    };
};

export const changeIsLogInOpen = (isLogInOpen, sayi) => {
    return {
        type: "IS_LOG_IN_OPEN",
        payload: { isLogInOpen, sayi },
    };
};

export const changeIsSignUpOpen = (isSignUpOpen) => {
    return {
        type: "IS_SIGN_UP_OPEN",
        payload: isSignUpOpen,
    };
};
