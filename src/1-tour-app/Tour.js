import React, { useState } from "react";
import styles from "./Tour.module.css";

function Tour({ id, name, info, image, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className={styles.tour}>
            <img src={image} alt={name} />
            <footer className={styles.footer}>
                <div className={styles.tourInfo}>
                    <h4>{name}</h4>
                    <h4 className={styles.tourPrice}>${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 199)}...`}
                    <button
                        className={styles.readMoreBtn}
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <button
                    className={styles.notInterested}
                    onClick={() => removeTour(id)}
                >
                    not interested
                </button>
            </footer>
        </article>
    );
}

export default Tour;
