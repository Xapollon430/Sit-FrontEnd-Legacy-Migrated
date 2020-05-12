import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { useSelector, useDispatch } from "react-redux";
import { changeIsLogInOpen, changeIsSignUpOpen } from "../../Redux/actions";

const AuthModal = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const changeTab = (e) => {
        e.target.getAttribute("name") === "login"
            ? dispatch(changeIsLogInOpen(true))
            : dispatch(changeIsSignUpOpen(true));
    };

    return (
        <div className="form-wrap">
            <AuthTabs changeTab={changeTab} {...state} />
            {state.isLogInOpen ? <Login /> : <SignUp />}
        </div>
    );
};

export default AuthModal;
