import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="products" element={<Products />} />
                    <Route
                        path="products/:productId"
                        element={<SingleProduct />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
