import React from "react";
import Header from "./Components/Header/Header";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import BackgroundImage from "./AppCss";

function App() {
	return (
		<React.Fragment>
			<BackgroundImage>
				<Header />
				<Jumbotron />
			</BackgroundImage>
		</React.Fragment>
	);
}

export default App;
