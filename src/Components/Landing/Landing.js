import React, { useReducer } from "react";
import Header from "../Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";

import LandingReducer, { changeIsModalOpen } from "./LandingReducer";

function Landing() {
    let [modalState, setModalState] = useReducer(LandingReducer);

    const closeRegisterModal = () => {
        setModalState(changeIsModalOpen(false));
    };

    return (
        <BackgroundImage>
            <Header />

            <Jumbotron />
            <Modal
                showModal={modalState.isRegisterModalOpen}
                onCancel={closeRegisterModal}
            >
                <AuthModal setModalState={setModalState} />
            </Modal>
        </BackgroundImage>
    );
}

export default Landing;
