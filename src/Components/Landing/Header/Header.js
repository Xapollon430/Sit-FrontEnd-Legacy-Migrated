import React, { useContext } from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../../CustomHooks/Hooks";
import { useSelector, useDispatch } from "react-redux";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
    ModalContext,
} from "../ModalContextProvider";
import { changeLoggedIn } from "../../../Redux/actions";

function Header() {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const modalContext = useContext(ModalContext);
    const globalState = useSelector((state) => state);
    const globalDispatch = useDispatch();

    const openModal = (event) => {
        modalContext.setModalState(changeIsModalOpen(true));
        event.target.getAttribute("name") === "login"
            ? modalContext.setModalState(changeIsLogInOpen(true))
            : modalContext.setModalState(changeIsSignUpOpen(true));
    };

    const logOut = () => {
        localStorage.removeItem("jwt-token");
        globalDispatch(changeLoggedIn(false));
    };

    return (
        <Navbar>
            <Brand>Sit!</Brand>
            <Menu onClick={showHamburger} className="fas fa-bars fa-3x"></Menu>
            <Nav close={isHamburgerOpen}>
                <Button size="small" variant="outlined">
                    Find A Sitter
                </Button>
                <Button variant="outlined">Be A Sitter</Button>
                <EmptyDiv />
                {globalState.loggedIn ? (
                    <Button variant="outlined" name="login">
                        {globalState.user.username}
                    </Button>
                ) : (
                    <Button variant="outlined" name="login" onClick={openModal}>
                        Log In
                    </Button>
                )}
                {globalState.loggedIn ? (
                    <Button variant="outlined" onClick={logOut}>
                        Log Out
                    </Button>
                ) : (
                    <Button variant="outlined" onClick={openModal}>
                        Sign Up
                    </Button>
                )}
            </Nav>
        </Navbar>
    );
}

export default Header;
