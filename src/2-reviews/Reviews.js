import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Reviews() {
    const [index, setIndex] = useState(0);
    const { name, image, job, text } = people[index];

    const checkNumber = (value) => {
        if (value < 0) {
            return people.length - 1;
        }
        if (value > people.length - 1) return 0;
        if (value === index) return value + 1;
        return value;
    };

    const randomIndex = () => {
        let randomN = Math.floor(Math.random() * people.length - 1);
        setIndex(checkNumber(randomN));
    };

    const nextReview = () => {
        setIndex((prev) => {
            let newIndex = prev + 1;
            return checkNumber(newIndex);
        });
    };
    const prevReview = () => {
        setIndex((prev) => {
            let newIndex = prev - 1;
            return checkNumber(newIndex);
        });
    };
    return (
        <section className="reviews">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomIndex}>
                Surprise me
            </button>
        </section>
    );
}

export default Reviews;
