import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

import "./index.css";

function App() {
    const [people, setPeople] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setPeople(data);
    }, []);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(index + 1);
        }, 3000);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="slider-main">
            <div className="title">
                <h2>
                    <span>/</span> Reviews
                </h2>
            </div>
            <div className="slider-section-center">
                {people.map((person, pIndex) => {
                    const { id, image, name, title, quote } = person;
                    let position = "nextSlide";
                    if (pIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        pIndex === index - 1 ||
                        (index === 0 && pIndex === people.length - 1)
                    ) {
                        position = "prevSlide";
                    }
                    return (
                        <article
                            key={id}
                            className={`${position} slider-article`}
                        >
                            <img
                                src={image}
                                alt={name}
                                className="person-img"
                            />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

export default App;
