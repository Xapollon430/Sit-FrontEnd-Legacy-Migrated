import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./Redux/reducers";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ModalContextProvider from "./Context/ModalContextProvider";

ReactDOM.render(
    <Provider store={store}>
        <ModalContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ModalContextProvider>
    </Provider>,
    document.getElementById("root")
);
