import React, { useReducer } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";

import LandingReducer, {
    changeIsModalOpen,
    ModalContext,
} from "./LandingReducer";

const initialReducerState = {
    isModalOpen: false,
    isLogInOpen: false,
    isSignUpOpen: false,
};

function Landing() {
    let [modalState, setModalState] = useReducer(
        LandingReducer,
        initialReducerState
    );

    const closeRegisterModal = () => {
        setModalState(changeIsModalOpen(false));
    };

    return (
        <ModalContext.Provider
            value={{
                setModalState,
                ...modalState,
            }}
        >
            <BackgroundImage>
                <Header />

                <Jumbotron />
                <Modal
                    showModal={modalState.isModalOpen}
                    onCancel={closeRegisterModal}
                >
                    <AuthModal />
                </Modal>
            </BackgroundImage>
        </ModalContext.Provider>
    );
}

export default Landing;
