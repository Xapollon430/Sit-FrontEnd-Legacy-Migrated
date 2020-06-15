import React, { Fragment, useEffect } from "react";
import Landing from "./Components/Landing/Landing";
import FindSitter from "./Components/FindSitter/FindSitter";
import { Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <Switch>
            <Route path="/" exact render={() => <FindSitter />} />
            <Route path="/1" exact render={() => <Landing />} />
        </Switch>
    );
};

export default App;
