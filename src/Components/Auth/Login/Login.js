import React, { useState } from "react";
import "../AuthModal.css";

const Login = ({ submitOnChange, submitHandler }) => {
    return (
        <div id="login-tab-content">
            <form className="login-form" onSubmit={submitHandler}>
                <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Email or Username"
                    onSubmit={(e) => submitHandler(e, "login")}
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
