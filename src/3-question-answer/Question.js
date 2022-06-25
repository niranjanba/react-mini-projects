import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="btn">
                    {showInfo ? (
                        <AiOutlineMinus
                            onClick={() => setShowInfo(!showInfo)}
                        />
                    ) : (
                        <AiOutlinePlus onClick={() => setShowInfo(!showInfo)} />
                    )}
                </button>
            </header>
            {showInfo && <p>{info}</p>}
        </article>
    );
}

export default Question;
