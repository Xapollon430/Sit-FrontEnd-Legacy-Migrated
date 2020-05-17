import React, { useContext } from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../../CustomHooks/Hooks";
import { useSelector } from "react-redux";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
    ModalContext,
} from "../ModalContextProvider";

function Header() {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const modal = useContext(ModalContext);
    const globalState = useSelector((state) => state);

    const openModal = (event) => {
        modal.setModalState(changeIsModalOpen(true));
        event.target.getAttribute("name") === "login"
            ? modal.setModalState(changeIsLogInOpen(true))
            : modal.setModalState(changeIsSignUpOpen(true));
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
                    <Button variant="outlined">Log Out</Button>
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
