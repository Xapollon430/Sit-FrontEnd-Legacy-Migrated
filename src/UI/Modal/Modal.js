import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import { ModalWrap } from "./ModalCss";

const ModalOverlay = props => {
	const content = (
		<React.Fragment>
			<ModalWrap>{props.children}</ModalWrap>
		</React.Fragment>
	);
	return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = props => {
	return (
		<React.Fragment>
			{props.showModal && (
				<React.Fragment>
					<Backdrop onCancel={props.onCancel} />
					<ModalOverlay {...props} />
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Modal;
