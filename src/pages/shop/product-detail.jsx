import { useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = async () => {
        let product = await fetch('https://dummyjson.com/products/' + id, {
            method: 'GET',
        })
        product = await product.json();

        setProduct(product);
    } 
    getProduct();
    return(<><h2>{id}</h2><div>{JSON.stringify(product)}</div></>
    );
};

