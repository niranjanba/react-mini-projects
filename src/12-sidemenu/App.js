import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

import "./index.css";

function App() {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </main>
    );
}

export default App;
