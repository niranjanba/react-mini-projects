import { useState } from "react";
import data from "./data";
import "./index.css";
import Question from "./Question";

function App() {
    const [questions, setQuestion] = useState(data);
    return (
        <main>
            <div className="container">
                <h3>Question and Answers</h3>
                <section className="info">
                    {questions.map((que, index) => {
                        return (
                            <Question
                                key={que.id}
                                title={que.title}
                                info={que.info}
                            />
                        );
                    })}
                </section>
            </div>
        </main>
    );
}

export default App;
