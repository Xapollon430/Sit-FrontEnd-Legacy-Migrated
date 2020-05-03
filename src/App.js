import React, { Fragment } from "react";
import Landing from "./Components/Landing/Landing";
import { Route } from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Landing} />
        </Fragment>
    );
};

export default App;
