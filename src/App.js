import React from "react";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import BackgroundImage from "./AppCss";

function App() {
	return (
		<div>
			<BackgroundImage>
				<Header />
				<Jumbotron />
			</BackgroundImage>
		</div>
	);
}

export default App;
