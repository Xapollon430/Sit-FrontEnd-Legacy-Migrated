import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Jumbotron from "./Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import Information from "./Information/Information";
import AuthModal from "../Auth/AuthModal";
import { changeIsModalOpen } from "../../store/actions/AuthModalActions";
import { useDispatch, useSelector } from "react-redux";

function Landing() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const closeRegisterModal = () => {
        dispatch(changeIsModalOpen(false));
    };

    const [objStringified, setObj] = useState({ a: 1 });
    useEffect(() => {
        console.log(123);
    }, [objStringified]);

    console.log(objStringified);

    return (
        <React.Fragment>
            <BackgroundImage>
                <Header />
                <Jumbotron />
                <Modal
                    showModal={state.modalState.isModalOpen}
                    onCancel={closeRegisterModal}
                >
                    <AuthModal />
                </Modal>
            </BackgroundImage>
            <Information />
            <button
                onClick={() => {
                    setObj({ a: Math.random() });
                }}
            >
                12311231
            </button>
        </React.Fragment>
    );
}

export default Landing;
