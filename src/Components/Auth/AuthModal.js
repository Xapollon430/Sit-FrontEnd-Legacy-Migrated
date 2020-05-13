import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { useSelector, useDispatch } from "react-redux";
import { SignUpFormChecker } from "./AuthHelper";
import {
    changeIsLogInOpen,
    changeIsSignUpOpen,
    generalDispatchBundler,
} from "../../Redux/actions";

const AuthModal = () => {
    const state = useSelector((state) => state);
    const [userInfo, setUserInfo] = useState(null);
    const [formError, setFormError] = useState(null);
    const dispatch = useDispatch();

    const changeTab = (e) => {
        e.target.getAttribute("name") === "login"
            ? dispatch(changeIsLogInOpen(true))
            : dispatch(changeIsSignUpOpen(true));
    };

    const submitHandler = async (e, type) => {
        e.preventDefault();
        // let x =
        if (type == "login") {
            let response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            var { user, token } = await response.json();
        } else {
            let response = await fetch("http://localhost:5000/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            var { user, token } = await response.json();
        }

        if (user && token) {
            dispatch(
                generalDispatchBundler({
                    user,
                    loggedIn: true,
                    isRegisterModalOpen: false,
                })
            ); //bundle dispatch
            localStorage.setItem("jwt-token", token);
        } else {
            console.log("error");
        }
    };

    const onChange = (e) => {
        setUserInfo({
            ...userInfo,
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
