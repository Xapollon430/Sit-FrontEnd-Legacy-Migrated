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
import Dropdown from "../../../UI/Dropdown/Dropdown";
import { changeLoggedIn } from "../../../Redux/actions";

const Header = React.memo(() => {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const modalContext = useContext(ModalContext);
    const globalState = useSelector((state) => state);
    const globalDispatch = useDispatch();

    console.log(12);

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
                    <React.Fragment>
                        <Button
                            variant="outlined"
                            name="login"
                            onClick={openModal}
                        >
                            Profile
                        </Button>
                        <Dropdown>
                            {[
                                [
                                    <i
                                        style={{ marginRight: 10 + "px" }}
                                        className="fas fa-user-circle"
                                    ></i>,
                                    "Profile",
                                ],
                                [
                                    <i
                                        style={{ marginRight: 10 + "px" }}
                                        className="fas fa-cog"
                                    ></i>,
                                    "Settings",
                                ],
                                [
                                    <i
                                        style={{
                                            marginRight: 10 + "px",
                                            paddingLeft: 5 + "px",
                                        }}
                                        className="fas fa-question"
                                    ></i>,
                                    "Help",
                                ],
                            ]}
                        </Dropdown>
                    </React.Fragment>
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
});

export default Header;
