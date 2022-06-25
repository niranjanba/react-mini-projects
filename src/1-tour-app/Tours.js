import React from "react";
import Tour from "./Tour";

import styles from "./Tour.module.css";

function Tours({ tours, removeTour }) {
    return (
        <div className={styles.toursContainer}>
            {tours.map((tour) => {
                return <Tour key={tour.id} removeTour={removeTour} {...tour} />;
            })}
        </div>
    );
}

export default Tours;
