import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="products">
            <h1>products</h1>
            {products.map((item, index) => {
                return (
                    <article key={index}>
                        <h5>{item.title}</h5>
                        <Link to={`/products/${item.id}`}>show more</Link>
                    </article>
                );
            })}
        </div>
    );
}

export default Products;
