import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import {
    changeIsLogInOpen,
    changeIsSignUpOpen,
} from "../Landing/LandingReducer";
import { signUpFormChecker, logInFormChecker } from "./AuthHelper";
import { generalDispatchBundler } from "../../Redux/actions";

const initialUserState = {
    email: "",
    username: "",
    password: "",
};

const AuthModal = ({ setModalState }) => {
    const [userInfo, setUserInfo] = useState(initialUserState);
    const [formError, setFormError] = useState({});

    const submitHandler = async (e, type) => {
        e.preventDefault();

        let errors =
            type === "login"
                ? logInFormChecker(userInfo)
                : signUpFormChecker(userInfo);

        setFormError(errors);

        if (!errors.errorExists) {
            let response = await fetch(`http://localhost:5000/${type}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            let { user, token } = await response.json();

            if (user && token) {
                dispatch(
                    generalDispatchBundler({
                        user,
                        loggedIn: true,
                    })
                );
                closeRegisterModal();
                localStorage.setItem("jwt-token", token);
            }
        }
    };

    const onChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.getAttribute("name")]: e.target.value,
        });
    };

    const changeTab = (e) => {
        e.target.getAttribute("name") === "login"
            ? setModalState(changeIsLogInOpen(true))
            : setModalState(changeIsSignUpOpen(true));
        setFormError({});
        setUserInfo(initialUserState); // ??? chnge when local
    };

    return (
        <div className="form-wrap">
            <AuthTabs changeTab={changeTab} {...state} />
            {state.isLogInOpen ? (
                <Login
                    onChange={onChange}
                    submitHandler={submitHandler}
                    formError={formError}
                />
            ) : (
                <SignUp
                    onChange={onChange}
                    submitHandler={submitHandler}
                    formError={formError}
                />
            )}
        </div>
    );
};

export default AuthModal;
