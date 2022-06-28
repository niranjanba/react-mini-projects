import React from "react";
import { FaBars } from "react-icons/fa";

import { useGlobalContext } from "./context";

function Home() {
    const { openModal, openSidebar } = useGlobalContext();
    return (
        <main>
            <button className="toggle-navbar" onClick={() => openSidebar()}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                show modal
            </button>
        </main>
    );
}

export default Home;
