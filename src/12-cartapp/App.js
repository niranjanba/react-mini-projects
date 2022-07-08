import React from "react";
import { useGlobalContext } from "./context";

import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
    const { loading } = useGlobalContext();
    if (loading) {
        return (
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <CartContainer />
        </div>
    );
}

export default App;
