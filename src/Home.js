import React from "react";
import { Link } from "react-router-dom";
import data from "./data";

function Home() {
    return (
        <div className="home-container">
            <div className="title">
                <h3>Small Project</h3>
                <div className="underline"></div>
            </div>

            <div className="apps-container">
                {data.map((app, index) => {
                    const { title, id, path, image } = app;
                    return (
                        <Link key={index} to={path}>
                            <div key={id} className="app">
                                <img src={image} alt={title} />
                                <h4>{title}</h4>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
