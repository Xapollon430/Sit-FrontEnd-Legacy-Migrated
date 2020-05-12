import React from "react";
import "../AuthModal.css";

const SignUp = ({ onChange, submitHandler }) => {
    return (
        <div className="tabs-content">
            <div id="signup-tab-content" className="active">
                <form className="signup-form" onSubmit={submitHandler}>
                    <input
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email"
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        className="input"
                        name="username"
                        placeholder="Username"
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                    />
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
