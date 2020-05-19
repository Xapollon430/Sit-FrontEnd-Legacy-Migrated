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
                <Route path="/" exact render={() => <Landing />} />
            </ModalContextProvider>
        </Fragment>
    );
};

export default App;
