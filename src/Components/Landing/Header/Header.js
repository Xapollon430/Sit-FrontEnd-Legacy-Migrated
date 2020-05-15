import React, { useContext } from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../../CustomHooks/Hooks";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
    ModalContext,
} from "../LandingReducer";

function Header() {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const modal = useContext(ModalContext);

    const changeTab = (event) => {
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
                <Button variant="outlined" name="login" onClick={changeTab}>
                    Log In
                </Button>
                <Button variant="outlined" name="signup" onClick={changeTab}>
                    Sign Up
                </Button>
            </Nav>
        </Navbar>
    );
}

export default Header;
