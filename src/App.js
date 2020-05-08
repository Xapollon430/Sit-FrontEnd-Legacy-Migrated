import React, { Fragment } from "react";
import Landing from "./Components/Landing/Landing";
import { Route } from "react-router-dom";

let x = 10;

const App = () => {
    return (
        <Fragment>
            <Route path="/" exact render={() => <Landing />} />
        </Fragment>
    );
};

export default App;
