import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { useSelector, useDispatch } from "react-redux";
import { changeIsLogInOpen, changeIsSignUpOpen } from "../../Redux/actions";

const initialUserState = {};

const AuthModal = () => {
    const state = useSelector((state) => state);
    const [userInfo, setUserInfo] = useState(null);
    const dispatch = useDispatch();

    const changeTab = (e) => {
        e.target.getAttribute("name") === "login"
            ? dispatch(changeIsLogInOpen(true))
            : dispatch(changeIsSignUpOpen(true));
    };

    const submitHandler = async (e, type) => {
        e.preventDefault();
        if (type == "login") {
            let response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpInfo),
            });
            var { user, token } = await response.json();
        } else {
            let response = await fetch("http://localhost:5000/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(signUpInfo),
            });
            var { user, token } = await response.json();
        }

        if (user && token) {
            dispatch(changeUserAndLoggedIn({ user, loggedIn: true })); //bundle dispatch
            dispatch(changeIsRegisterModalOpen(false));
            localStorage.setItem("jwt-token", token);
        } else {
            console.log("error");
        }
    };

    const onChange = (e) => {
        setSignUpInfo({
            ...signUpInfo,
            [e.target.getAttribute("name")]: e.target.value,
        });
    };

    return (
        <div className="form-wrap">
            <AuthTabs changeTab={changeTab} {...state} />
            {state.isLogInOpen ? (
                <Login onChange={onChange} submitHandler={submitHandler} />
            ) : (
                <SignUp onChange={onChange} submitHandler={submitHandler} />
            )}
        </div>
    );
};

export default AuthModal;
