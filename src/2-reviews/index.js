import React from "react";

import Reviews from "./Reviews";
import "./index.css";

function index() {
    return (
        <section className="reviews-container">
            <div className="title">
                <h2>Our Reviews</h2>
                <div className="underline"></div>
            </div>
            <Reviews />
        </section>
    );
}

export default index;
