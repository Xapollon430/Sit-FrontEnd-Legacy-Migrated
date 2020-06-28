import React, { Fragment } from "react";
import Landing from "./Components/Landing/Landing";
import FindSitter from "./Components/FindSitter/FindSitter";
import { Route, Switch } from "react-router-dom";

const App = () => {
    console.log(123);
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" render={() => <Landing />} />
                <Route exact path="/search" render={() => <FindSitter />} />
            </Switch>
        </Fragment>
    );
};

export default App;
