import React from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../../CustomHooks/Hooks";
import { useSelector, useDispatch } from "react-redux";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
} from "../../../store/actions/AuthModalActions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { changeLoggedIn } from "../../../store/actions/GeneralActions";

const Header = React.memo(() => {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const openModal = (event) => {
        dispatch(changeIsModalOpen(true));
        event.target.getAttribute("name") === "login"
            ? dispatch(changeIsLogInOpen(true))
            : dispatch(changeIsSignUpOpen(true));
    };

    const logOut = () => {
        localStorage.removeItem("jwt-token");
        dispatch(changeLoggedIn(false));
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
                {state.appState.loggedIn ? (
                    <React.Fragment>
                        <Button variant="outlined">
                            {state.appState.username}
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
