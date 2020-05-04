import React, { useState } from "react";
import "../AuthModal.css";

const Login = () => {
    const [loginInfo, setUserInfo] = useState({
        username: null,
        password: null,
    });

    console.log(loginInfo);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const submitOnChange = (e) => {
        setUserInfo({
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
                    onChange={submitOnChange}
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
