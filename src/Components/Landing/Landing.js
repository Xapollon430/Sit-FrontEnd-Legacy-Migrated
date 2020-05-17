import React, { useContext } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";
import { ModalContext } from "./ModalContextProvider";

function Landing(props) {
    const modalContext = useContext(ModalContext);

    const closeRegisterModal = () => {
        setModalState(changeIsModalOpen(false));
    };

    return (
        <BackgroundImage>
            <Header />
            <Jumbotron />
            <Modal
                showModal={modalContext.isModalOpen}
                onCancel={closeRegisterModal}
            >
                <AuthModal />
            </Modal>
        </BackgroundImage>
    );
}

export default Landing;
