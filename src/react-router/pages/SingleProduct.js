import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const product = products.find((product) => product.id === productId);
    if (!product) {
        return <div>Loading</div>;
    }
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
        </div>
    );
}

export default SingleProduct;
