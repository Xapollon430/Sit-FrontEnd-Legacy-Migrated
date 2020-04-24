import React from "react";
import "../AuthModal.css";

const SignUp = () => {
	return (
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
						<span>Terms of service</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
