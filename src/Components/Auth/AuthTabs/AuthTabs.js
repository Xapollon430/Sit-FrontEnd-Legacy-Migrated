import React, { useContext } from "react";
import { ModalContext } from "../../Landing/ModalContextProvider";
import "../AuthModal.css";

const AuthTabs = ({ changeTab, errorMessageFromServer }) => {
    let modal = useContext(ModalContext);
    return (
        <div className="form-wrap">
            <div className="tabs">
                <h3 className="signup-tab">
                    <span
                        className={modal.isSignUpOpen ? "active" : ""}
                        onClick={changeTab}
                    >
                        Sign Up
                    </span>
                </h3>
                <h3 className="login-tab">
                    <span
                        className={modal.isLogInOpen ? "active" : ""}
                        name="login"
                        onClick={changeTab}
                    >
                        Login
                    </span>
                </h3>
            </div>
            {errorMessageFromServer ? (
                <div className="error-message padding-left">
                    {errorMessageFromServer}
                </div>
            ) : null}
        </div>
    );
};

export default AuthTabs;
