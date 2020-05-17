import React, { Fragment, useContext } from "react";
import Landing from "./Components/Landing/Landing";
import ModalContextProvider, {
    ModalContext,
} from "./Components/Landing/ModalContextProvider";

import { Route } from "react-router-dom";

const App = () => {
    return (
        <Fragment>
            <ModalContextProvider>
                <X></X>
                <Route path="/" exact render={() => <Landing />} />
            </ModalContextProvider>
            <Route path="/" exact render={() => <Landing />} />
        </Fragment>
    );
};

export default App;

const X = () => {
    let x = useContext(ModalContext);
    console.log(x);
    return <button>123</button>;
};
