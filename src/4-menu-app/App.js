import { useEffect, useState } from "react";
import Categories from "./Categories.js";
import items from "./data.js";
import "./index.css";
import Menu from "./Menu.js";

const allCategory = ["all", ...new Set(items.map((item) => item.category))];

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(allCategory);
    }, []);

    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(items);
        } else {
            const newItems = items.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    };

    return (
        <div className="menu-main">
            <section className="menu menu-section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </div>
    );
}

export default App;
