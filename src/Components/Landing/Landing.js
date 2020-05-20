import React, { useContext } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import Information from "./Information/Information";
import AuthModal from "../Auth/AuthModal";
import { ModalContext } from "./ModalContextProvider";
import { changeIsModalOpen } from "../Landing/ModalContextProvider";

function Landing() {
    const modalContext = useContext(ModalContext);

    const closeRegisterModal = () => {
        modalContext.setModalState(changeIsModalOpen(false));
    };

    return (
        <React.Fragment>
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
            <Information />
        </React.Fragment>
    );
}

export default Landing;
