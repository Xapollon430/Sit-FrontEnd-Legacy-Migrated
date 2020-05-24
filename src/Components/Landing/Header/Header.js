import React, { useContext } from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../../CustomHooks/Hooks";
import { useSelector, useDispatch } from "react-redux";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
    ModalContext,
} from "../../../Context/ModalContextProvider";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { changeLoggedIn } from "../../../Redux/actions";

const Header = React.memo(() => {
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
                    <React.Fragment>
                        <Button variant="outlined">
                            {globalState.user.username}
                        </Button>
                        <Button variant="outlined" onClick={logOut}>
                            Log Out
                        </Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Button
                            variant="outlined"
                            onClick={openModal}
                            name="login"
                        >
                            Log In
                            <ProfileDropdown />
                        </Button>

                        <Button variant="outlined" onClick={openModal}>
                            Sign Up
                        </Button>
                    </React.Fragment>
                )}
            </Nav>
        </Navbar>
    );
});

export default Header;
