import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

function Navbar() {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom;
        openSubmenu(page, { center, bottom });
    };
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link-btn")) closeSubmenu();
    };
    return (
        <nav className="submenu-nav" onMouseOver={handleSubmenu}>
            <div className="submenu-nav-center">
                <div className="submenu-nav-header">
                    <img src={logo} className="logo" alt="stripe" />
                    <button
                        className="submenu-btn toggle-btn"
                        onClick={openSidebar}
                    >
                        <FaBars />
                    </button>
                </div>

                <ul className="submenu-nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            products
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            developers
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            company
                        </button>
                    </li>
                </ul>
                <button className="submenu-btn signin-btn">sign in</button>
            </div>
        </nav>
    );
}

export default Navbar;
