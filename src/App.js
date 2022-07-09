import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import apps from "./data";

// import RouterDOM from "./react-router/App";

function App() {
    // return <RouterDOM />;
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path="/" />
                {apps.map((app) => {
                    const { element, id, path } = app;
                    return (
                        element && (
                            <Route key={id} element={element} path={path} />
                        )
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
