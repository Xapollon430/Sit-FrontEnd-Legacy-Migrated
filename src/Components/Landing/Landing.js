import React, { useContext } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";
import ModalContextProvider, { ModalContext } from "./ModalContextProvider";

function Landing() {
    const closeRegisterModal = () => {
        setModalState(changeIsModalOpen(false));
    };

    const modalContext = useContext(ModalContext);

    return (
        <BackgroundImage>
            <ModalContextProvider>
                <Header />
                <Jumbotron />
                <Modal
                    showModal={modalContext.isModalOpen}
                    onCancel={closeRegisterModal}
                >
                    <AuthModal />
                </Modal>
            </ModalContextProvider>
        </BackgroundImage>
    );
}

export default Landing;
