import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "../utils/Loading";
import "./index.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);

    const fetchData = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        setJobs(data);
        setLoading(false);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    const { title, dates, duties, company } = jobs[value];

    return (
        <div className="jobs-section jobs-main">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((job, index) => {
                        return (
                            <button
                                className={`job-btn ${
                                    value === index && "active"
                                }`}
                                onClick={() => setValue(index)}
                            >
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </div>
    );
}

export default App;
