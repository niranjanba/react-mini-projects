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
        <main className="container">
            <div className={styles.title}>
                <h1>Tour App</h1>
                <div className={styles.underline}></div>
            </div>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default Index;
