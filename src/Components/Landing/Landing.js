import React from "react";
import Header from "../Header/Header";
import Jumbotron from "../Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";
import Modal from "../../UI/Modal/Modal";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { changeIsLogInOpen, changeIsSignUpOpen, changeIsRegisterModalOpen } from "../../Redux/actions";

function Landing() {
	let state = useSelector(state => state);
	let dispatch = useDispatch();

	const closeRegisterModal = () => {
		console.log(123);
		dispatch(changeIsRegisterModalOpen(false));
		dispatch(changeIsLogInOpen(false));
		dispatch(changeIsSignUpOpen(false));
	};

	return (
		<BackgroundImage>
			<Header />
			<Jumbotron />
			<Modal showModal={state.isRegisterModalOpen} onCancel={closeRegisterModal}>
				<Login />
			</Modal>
		</BackgroundImage>
	);
}

export default Landing;
