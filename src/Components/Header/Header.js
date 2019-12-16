import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar, Brand } from "./HeaderCss";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	button: {
		backgroundColor: "Transparent",
		cursor: "pointer",
		overflow: "hidden",
		border: "2px solid white",
		fontWeight: "700",
		fontSize: "0.8rem",
		color: "white",
		height: "45px"
	}
});

function Header() {
	const classes = useStyles();

	return (
		<Navbar>
			<Brand>Sit!</Brand>
			<Button size="small" variant="outlined" className={classes.button}>
				Post A Job
			</Button>
			<Button variant="outlined" className={classes.button}>
				Find A Job
			</Button>
			<div />
			<Button variant="outlined" className={classes.button}>
				Log In
			</Button>
			<Button variant="outlined" className={classes.button}>
				Sign Up
			</Button>
		</Navbar>
	);
}

export default Header;
