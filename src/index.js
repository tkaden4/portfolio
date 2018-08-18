import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

const root = "react-app";

const root_el = document.getElementById(root);
if (!root_el) {
    document.innerHTML = "Unable to load app";
    throw new Error(`Unable to find root element ${root}`);
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    root_el
);