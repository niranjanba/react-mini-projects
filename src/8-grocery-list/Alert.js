import { useEffect } from "react";

function Alert({ type, msg, removeAlert, list }) {
    useEffect(() => {
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 2000);

        return () => clearTimeout(timeOut);
    }, [list]);
    return (
        <div className="alert">
            <p className={`${type === "success" ? "success" : "danger"}`}>
                {msg}
            </p>
        </div>
    );
}

export default Alert;
