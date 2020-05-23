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
} from "../../Context/ModalContextProvider";
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
    const [errorMessageFromServer, setErrorMessageFromServer] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const modalContext = useContext(ModalContext);
    const globalDispatch = useDispatch();

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
            let data = await response.json();

            if (data.user && data.token) {
                globalDispatch(
                    generalDispatchBundler({
                        user: data.user,
                        loggedIn: true,
                    })
                );
                modalContext.setModalState(changeIsModalOpen(false));
                localStorage.setItem("jwt-token", data.token);
            } else {
                setErrorMessageFromServer(data.message);
                setUserInfo(initialUserState);
            }
            setIsLoading(false);
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
            ? modalContext.setModalState(changeIsLogInOpen(true))
            : modalContext.setModalState(changeIsSignUpOpen(true));
        setFormError({});
        setErrorMessageFromServer(null);
        setUserInfo(initialUserState);
    };

    return (
        <div className="form-wrap">
            <AuthTabs
                changeTab={changeTab}
                errorMessageFromServer={errorMessageFromServer}
            />
            {modalContext.isLogInOpen ? (
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
