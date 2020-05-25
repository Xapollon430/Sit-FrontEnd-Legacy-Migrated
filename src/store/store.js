import React from "react";
import { createStore, combineReducers } from "redux";
import AuthModalReducer from "./reducers/AuthModalReducer";
import GeneralReducer from "./reducers/GeneralReducer";
import { Provider } from "react-redux";

combineReducers({
    modalState: AuthModalReducer,
    appState: GeneralReducer,
});

const store = createStore(rootReducer);

const StoreProvider = (props) => {
    return <Provider value={store}>{props.children}</Provider>;
};

export default StoreProvider;
