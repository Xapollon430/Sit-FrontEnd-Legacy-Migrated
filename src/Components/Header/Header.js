import React from "react";
import { Navbar, Brand, Menu, Nav, EmptyDiv, Button } from "./HeaderCss";
import { useResponsive } from "../../CustomHooks/Hooks";
import { useDispatch } from "react-redux";
import { changeIsRegisterModalOpen, changeIsSignUpOpen, changeIsLogInOpen } from "../../Redux/actions";

function Header() {
	const dispatch = useDispatch();
	const [showHamburger, isHamburgerOpen] = useResponsive();

	const changeTab = (event) => {
		// duplicate ?
		dispatch(changeIsRegisterModalOpen(true));
		event.target.getAttribute("name") === "login"
			? dispatch(changeIsLogInOpen(true))
			: dispatch(changeIsSignUpOpen(true));
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
