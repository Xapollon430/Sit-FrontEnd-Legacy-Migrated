import React from "react";
import Landing from "./Components/Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";

class Component {
	constructor() {
		this.state = 10;
		this.setState = function () {
			console.log("state");
		};
	}

	render() {
		console.log(this);
		return {
			type: "button",
			props: {
				// pass functional props
				onClick: () => {
					this.setState();
				},
				children: "Click Me",
			},
		};
	}
}

const componentInstance = new Component();

// 2. calling a render method on the instance
// ( In reality, React does the same thing for your class components)
const element = componentInstance.render();

// 3. calling the onClick function, which was passed as a  prop,
// will throw a 'TypeError: this.setState is not a function'.
element.props.onClick();

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
