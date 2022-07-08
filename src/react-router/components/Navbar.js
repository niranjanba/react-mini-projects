import React from "react";
import { Link } from "react-router-dom";

const styles = {
    sapce: {
        margin: "2rem",
    },
};
function Navbar() {
    return (
        <div>
            <Link style={styles.sapce} to="/">
                Home
            </Link>
            <Link style={styles.sapce} to="/about">
                About
            </Link>
            <Link style={styles.sapce} to="/contact">
                Contact
            </Link>
            <Link style={styles.sapce} to="/products">
                Products
            </Link>
        </div>
    );
}

export default Navbar;
