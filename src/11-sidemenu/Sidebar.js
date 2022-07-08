import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside
            className={`${
                isSidebarOpen
                    ? "submenu-sidebar-wrapper show"
                    : "submenu-sidebar-wrapper"
            }`}
        >
            <div className="submenu-sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="submenu-sidebar-links">
                    {sublinks.map((item, index) => {
                        const { links, page } = item;
                        return (
                            <article key={index}>
                                <h1>{page}</h1>
                                <div className="submenu-sidebar-sublinks">
                                    {links.map((link, index) => {
                                        const { url, icon, label } = link;

                                        return (
                                            <a key={index} href={url}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
