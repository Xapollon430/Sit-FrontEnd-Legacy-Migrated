import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Brand, Menu, Nav, EmptyDiv } from "./HeaderCss";
import Button from "@material-ui/core/Button";
import { useResponsive } from "../../CustomHooks/Hooks";
import { useDispatch } from "react-redux";
import { changeIsRegisterModalOpen, changeIsSignUpOpen, changeIsLogInOpen } from "../../Redux/actions";

const useStyles = makeStyles({
	button: {
		backgroundColor: "Transparent",
		cursor: "pointer",
		overflow: "hidden",
		border: "2px solid white",
		fontWeight: "700",
		fontSize: "0.8rem",
		color: "white",
		height: "45px",
		width: "100%"
	}
});

function Header() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [showHamburger, isHamburgerOpen] = useResponsive();

	const showLogInModal = () => {
		dispatch(changeIsRegisterModalOpen(true));
		dispatch(changeIsLogInOpen(true));
	};

	const showSignUpModal = () => {
		dispatch(changeIsRegisterModalOpen(true));
		dispatch(changeIsSignUpOpen(true));
	};

	return (
		<Navbar>
			<Brand>Sit!</Brand>
			<Menu onClick={showHamburger} className="fas fa-bars fa-3x"></Menu>
			<Nav close={isHamburgerOpen}>
				<Button size="small" variant="outlined" className={classes.button}>
					Find A Sitter
				</Button>
				<Button variant="outlined" className={classes.button}>
					Be A Sitter
				</Button>
				<EmptyDiv />
				<Button variant="outlined" className={classes.button} onClick={showLogInModal}>
					Log In
				</Button>
				<Button variant="outlined" className={classes.button} onClick={showSignUpModal}>
					Sign Up
				</Button>
			</Nav>
		</Navbar>
	);
}

export default Header;
