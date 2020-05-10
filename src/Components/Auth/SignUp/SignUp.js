import React, { useState } from "react";
import "../AuthModal.css";
import { changeUserAndLoggedIn } from "../../../Redux/actions";

const SignUp = () => {
    const [signUpInfo, setSignUpInfo] = useState(null);
    let dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:5000/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpInfo),
        });
        let { user, token } = await response.json();

        if (user && token) {
            dispatch(changeUserAndLoggedIn({ user, loggedIn: true })); //bundle dispatch
            localStorage.setItem("jwt-token", token);
        } else {
            console.log("error");
        }
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
