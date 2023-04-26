import React, { useContext } from "react";
import {ShopContext} from '../../context/shop-context';
import { Link } from "react-router-dom";

export const Product = (props) => {
    const {id, title, price, thumbnail} = props.data;
    const {addToCart} = useContext(ShopContext);
    return <div className="product">
        <Link to ={"/detail/" + id}>
        <img src={thumbnail} />
        <div className="description">
            <h4>
                <b>{title}</b>
            </h4>
            
        </div>
        </Link>
        <p>${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart</button>
    </div>
    ;
    
};