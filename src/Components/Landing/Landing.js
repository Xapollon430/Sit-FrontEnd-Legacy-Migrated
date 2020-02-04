import React from "react";
import Header from "../Header/Header";
import Jumbotron from "../Jumbotron/Jumbotron";
import BackgroundImage from "./LandingCss";

function Landing() {
	return (
		<BackgroundImage>
			<Header />
			<Jumbotron />
		</BackgroundImage>
	);
}

export default Landing;
