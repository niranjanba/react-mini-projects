import { useState } from "react";
import "./index.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#f15026").all(10)); // 10 is 100 / 10 number of shade

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        try {
            const colors = new Values(color).all(10);
            setList(colors);
            console.log(colors);
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        value={color}
                        className={`${error ? "error" : null}`}
                        placeholder="#f15026"
                    />
                    <button type="submit">generate</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hex={color.hex}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
