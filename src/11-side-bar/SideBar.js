import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { social, links } from "./data";

function SideBar() {
    const { showSidebar, closeSidebar } = useGlobalContext();
    return (
        <aside>
            <div className={`sidebar ${showSidebar && "show-sidebar"}`}>
                <div className="sidebar-header">
                    <h2>Side Bar</h2>
                    <button className="close-btn" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        let { id, icon, text, url } = link;
                        return (
                            <li key={id}>
                                <a href={url}>
                                    {icon} <p>{text}</p>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <ul className="social-links">
                    {social.map((item) => {
                        const { icon, id, url } = item;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}

export default SideBar;
