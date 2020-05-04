import React, { useState } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { useSelector, useDispatch } from "react-redux";
import { changeIsLogInOpen, changeIsSignUpOpen } from "../../Redux/actions";

const initialState = {
    username: null,
    password: null,
    email: null,
};

const AuthModal = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [userAuthInfo, setUserAuthInfo] = useState(initialState);

    const submitHandler = (e, type) => {
        e.preventDefault();
        if (type == "login") {
            // fethc(/logn)
        } else {
            // fethc(/soignup)
        }
    };

    const submitOnChange = (e) => {
        setUserAuthInfo({
            ...userAuthInfo,
            [e.target.getAttribute("name")]: e.target.value,
        });
    };

    const changeTab = (e) => {
        setUserAuthInfo(initialState);
        e.target.getAttribute("name") === "login"
            ? dispatch(changeIsLogInOpen(true))
            : dispatch(changeIsSignUpOpen(true));
    };

    return (
        <div className="form-wrap">
            <AuthTabs changeTab={changeTab} {...state} />
            {state.isLogInOpen ? (
                <Login
                    submitHandler={submitHandler}
                    submitOnChange={submitOnChange}
                />
            ) : (
                <SignUp
                    submitHandler={submitHandler}
                    submitOnChange={submitOnChange}
                />
            )}
        </div>
    );
};

export default AuthModal;
