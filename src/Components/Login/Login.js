import React from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { changeIsLogInOpen, changeIsSignUpOpen } from "../../Redux/actions";

const Login = props => {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const showSignUp = () => {
		dispatch(changeIsSignUpOpen(true));
		dispatch(changeIsLogInOpen(false));
	};

	const showLogIn = () => {
		dispatch(changeIsSignUpOpen(false));
		dispatch(changeIsLogInOpen(true));
	};

	return (
		<div className="form-wrap">
			<div className="tabs">
				<h3 className="signup-tab">
					<a className={state.isSignUpOpen ? "active" : ""} onClick={showSignUp}>
						Sign Up
					</a>
				</h3>
				<h3 className="login-tab">
					<a className={state.isLogInOpen ? "active" : ""} onClick={showLogIn}>
						Login
					</a>
				</h3>
			</div>
			{state.isLogInOpen ? (
				<div id="login-tab-content">
					<form className="login-form" action="" method="post">
						<input type="text" className="input" id="user_login" placeholder="Email or Username" />
						<input type="password" className="input" id="user_pass" placeholder="Password" />
						<input type="checkbox" className="checkbox" id="remember_me" />
						<input type="checkbox" /> <label>Remember me</label>
						<input type="submit" className="button" />
					</form>
					<div className="help-text">
						<p>
							<a>Forget your password?</a>
						</p>
					</div>
				</div>
			) : (
				<div className="tabs-content">
					<div id="signup-tab-content" className="active">
						<form className="signup-form">
							<input type="email" className="input" id="user_email" placeholder="Email" />
							<input type="text" className="input" id="user_name" placeholder="Username" />
							<input type="password" className="input" id="user_pass" placeholder="Password" />
							<input type="submit" className="button" />
						</form>
						<div className="help-text">
							<p>By signing up, you agree to our</p>
							<p>
								<a>Terms of service</a>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
