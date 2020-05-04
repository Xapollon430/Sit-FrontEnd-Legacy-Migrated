import React, { useState } from "react";
import "../AuthModal.css";

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState({
        username: null,
        password: null,
        email: null,
    });

    console.log(signUpInfo);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const submitOnChange = (e) => {
        setSignUpInfo({
            ...signUpInfo,
            [e.target.getAttribute("name")]: e.target.value,
        });
    };

    return (
        <div className="tabs-content">
            <div id="signup-tab-content" className="active">
                <form className="signup-form" onSubmit={submitHandler}>
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
