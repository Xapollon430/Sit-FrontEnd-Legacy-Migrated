import React from "react";
import Header from "../Header/Header";
import Jumbotron from "../Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import AuthModal from "../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import {
    changeIsLogInOpen,
    changeIsSignUpOpen,
    changeIsRegisterModalOpen,
} from "../../Redux/actions";

function Landing(props) {
    let state = useSelector((state) => state);
    let dispatch = useDispatch();

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
