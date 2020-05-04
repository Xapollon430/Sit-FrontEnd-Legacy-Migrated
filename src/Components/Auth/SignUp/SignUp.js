import React, { useState } from "react";
import "../AuthModal.css";

const SignUp = ({ submitOnChange, submitHandler }) => {
    return (
        <div className="tabs-content">
            <div id="signup-tab-content" className="active">
                <form
                    className="signup-form"
                    onSubmit={(e) => submitHandler(e, "signup")}
                >
                    <input
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email"
                        onChange={submitOnChange}
                    />
                    <input
                        type="text"
                        className="input"
                        name="username"
                        placeholder="Username"
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
