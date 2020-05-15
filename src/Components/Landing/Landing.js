import React, { useReducer } from "react";
import Header from "../Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { changeIsRegisterModalOpen } from "../../Redux/actions";

const initialReducerState = {
    isModalOpen: false,
    isLogInOpen: false,
    isSignUpOpen: false,
};

const modalReducer = (state = initialReducerState, action) => {
    switch (action.type) {
        case "IS_MODAL_OPEN":
            return {
                ...state,
            };
    }
};

function Landing() {
    let [modalState, setModalState] = useReducer();

    const closeRegisterModal = () => {
        dispatch(changeIsRegisterModalOpen(false));
    };

    return (
        <BackgroundImage>
            <Header />

            <Jumbotron />
            <Modal
                showModal={state.isRegisterModalOpen}
                onCancel={closeRegisterModal}
            >
                <AuthModal />
            </Modal>
        </BackgroundImage>
    );
}

export default Landing;
