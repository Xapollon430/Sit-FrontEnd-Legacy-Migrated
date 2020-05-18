import React, { useState, useContext } from "react";
import "./AuthModal.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import AuthTabs from "./AuthTabs/AuthTabs";
import { useDispatch } from "react-redux";
import {
    changeIsLogInOpen,
    changeIsSignUpOpen,
    changeIsModalOpen,
    ModalContext,
} from "../Landing/ModalContextProvider";
import { signUpFormChecker, logInFormChecker } from "./AuthHelper";
import { generalDispatchBundler } from "../../Redux/actions";

const initialUserState = {
    email: "",
    username: "",
    password: "",
};

const AuthModal = () => {
    const [userInfo, setUserInfo] = useState(initialUserState);
    const [formError, setFormError] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const modal = useContext(ModalContext);
    const dispatch = useDispatch();

    const submitHandler = async (e, type) => {
        e.preventDefault();

        let errors =
            type === "login"
                ? logInFormChecker(userInfo)
                : signUpFormChecker(userInfo);

        setFormError(errors);

        if (!errors.errorExists) {
            setIsLoading(true);
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
                setIsLoading(false);
                modal.setModalState(changeIsModalOpen(false));
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
            ? modal.setModalState(changeIsLogInOpen(true))
            : modal.setModalState(changeIsSignUpOpen(true));
        setFormError({});
        setUserInfo(initialUserState);
    };

    return (
        <div className="form-wrap">
            <AuthTabs changeTab={changeTab} />
            {modal.isLogInOpen ? (
                <Login
                    onChange={onChange}
                    submitHandler={submitHandler}
                    formError={formError}
                    isLoading={isLoading}
                />
            ) : (
                <SignUp
                    onChange={onChange}
                    submitHandler={submitHandler}
                    formError={formError}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export default AuthModal;
