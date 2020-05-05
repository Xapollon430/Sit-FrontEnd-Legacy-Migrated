import React, { useState } from "react";
import "../AuthModal.css";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const submitOnChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.getAttribute("name")]: e.target.value,
        });
    };

    return (
        <div id="login-tab-content">
            <form className="login-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Email or Username"
                    onSubmit={submitOnChange}
                />
                <input
                    type="password"
                    className="input"
                    name="password"
                    placeholder="Password"
                    onChange={submitOnChange}
                />
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
