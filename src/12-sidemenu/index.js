import React from "react";
import App from "./App";
import { AppProvider } from "./context";

function index() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    );
}

export default index;
