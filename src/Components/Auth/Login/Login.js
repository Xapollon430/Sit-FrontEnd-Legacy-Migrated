import React, { useState } from "react";
import "../AuthModal.css";

const Login = ({ onChange, submitHandler }) => {
    return (
        <div id="login-tab-content">
            <form
                className="login-form"
                onSubmit={(e) => submitHandler(e, "login")}
            >
                <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Email or Username"
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
                <p>
                    <span>Forget your password?</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
