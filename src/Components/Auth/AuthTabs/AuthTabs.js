import React from "react";
import "../AuthModal.css";
const AuthTabs = ({ changeTab, ...state }) => {
	return (
		<div className="form-wrap">
			<div className="tabs">
				<h3 className="signup-tab">
					<span className={state.isSignUpOpen ? "active" : ""} onClick={changeTab}>
						Sign Up
					</span>
				</h3>
				<h3 className="login-tab">
					<span className={state.isLogInOpen ? "active" : ""} name="login" onClick={changeTab}>
						Login
					</span>
				</h3>
			</div>
		</div>
	);
};

export default AuthTabs;
