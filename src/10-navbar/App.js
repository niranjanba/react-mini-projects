import "./index.css";

import { FaBars, FaTwitter } from "react-icons/fa";
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
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <h2>Nav Bar</h2>
                    <FaBars
                        className={`toggle-nav`}
                        onClick={() => setIsToggle(!isToggle)}
                    />
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
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
                <ul className="social-icons">
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
