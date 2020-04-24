import React from "react";
import "../AuthModal.css";

const Login = () => {
	return (
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
					<span>Forget your password?</span>
				</p>
			</div>
		</div>
	);
};

export default Login;
