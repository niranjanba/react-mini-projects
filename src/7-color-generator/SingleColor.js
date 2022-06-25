import { useEffect, useState } from "react";

function SingleColor({ index, rgb, weight, hex }) {
    const [alert, setAlert] = useState(false);
    const bgr = rgb.join(",");

    useEffect(() => {
        const timout = setTimeout(() => {
            console.log("hello");
            setAlert(false);
        }, 3000);
        return () => clearTimeout(timout);
    }, [alert]);
    return (
        <article
            className="color"
            style={{ backgroundColor: `rgb(${bgr})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(`#${hex}`);
            }}
        >
            <p
                style={{ color: `${index > 10 ? "white" : "balck"}` }}
                className="percent-value"
            >
                {weight}%
            </p>
            <p
                style={{ color: `${index > 10 ? "white" : "balck"}` }}
                className="hex-value"
            >
                #{hex}
            </p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
}

export default SingleColor;
