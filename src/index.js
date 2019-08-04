/**
 * Created by Paul on 03/08/2019.
 */
import React from "react";
import { render } from 'react-dom';
import App from "./App.js";
import store from "./store";

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);