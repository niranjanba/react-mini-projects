import React from "react";

function Categories({ filterItems, categories }) {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        className="btn"
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default Categories;
