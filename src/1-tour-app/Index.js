import React, { useEffect, useState } from "react";
import Loading from "../utils/Loading";
import Tours from "./Tours";
import styles from "./Tour.module.css";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

function Index() {
    const [tours, setTours] = useState([]);
    const [loading, setLoadinng] = useState(false);

    const fetchTour = async () => {
        setLoadinng(true);
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
        console.log(data);
        setLoadinng(false);
    };

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    useEffect(() => {
        fetchTour();
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="tour-container">
            <div className={styles.title}>
                <h3>Tour App</h3>
                <div className={styles.underline}></div>
            </div>
            <Tours tours={tours} removeTour={removeTour} />
        </div>
    );
}

export default Index;
