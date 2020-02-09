import React from "react";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Route path="/" exact>
				<Landing />
			</Route>
		</BrowserRouter>
	);
};

export default App;
