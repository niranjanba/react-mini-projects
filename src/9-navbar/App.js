import "./index.css";

import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { useEffect, useRef, useState } from "react";

function App() {
    const [isToggle, setIsToggle] = useState(false);

    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    useEffect(() => {
        const height = linksRef.current.getBoundingClientRect().height;

        if (isToggle) {
            linksContainerRef.current.style.height = `${height}px`;
        } else {
            linksContainerRef.current.style.height = "0px";
        }
    }, [isToggle]);

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="navbar-header">
                    <h2>navbar Bar</h2>
                    <FaBars
                        className={`navbar-toggle ${isToggle && "rotate"}`}
                        onClick={() => setIsToggle(!isToggle)}
                    />
                </div>
                <div className="navbar-links-container" ref={linksContainerRef}>
                    <ul className="navbar-links" ref={linksRef}>
                        {links.map((link, index) => {
                            const { url, text } = link;
                            return (
                                <li key={index}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="navbar-social-icons">
                    {social.map((item, index) => {
                        const { icon, url } = item;
                        return (
                            <li key={index}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default App;
