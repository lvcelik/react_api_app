import React, { useContext } from "react";
import { PRODUCTS } from '../../products';
import { Product } from "./product";
import './shop.css';
import { ShopContext } from "../../context/shop-context";



export const Shop = () => {
    const [cartItems, setCartItems] = useContext(ShopContext);
    
    const getCartItems = async () => {
        let laptops = await fetch('https://dummyjson.com/products/category/laptops', {
            method: 'GET',
        })
        laptops = await laptops.json();            

        let smartphones = await fetch('https://dummyjson.com/products/category/smartphones', {
            method: 'GET',
        })
        smartphones = await smartphones.json();

        setCartItems([...laptops.products, ...smartphones.products]);
        // console.log([...laptops.products, ...smartphones.products]);
    }
    getCartItems();

    return <div className="shop">
        <div className="shopTitle">

            <h1>Lovro Tech Shop</h1>

        </div>
        <div className="products">
            {cartItems && cartItems.map((product) => (
                <Product data={product}/>
            ))}
            {!cartItems && <h2>Nema proizvoda</h2>}
            {/* <button onClick={() => getCartItems()}>Label</button> */}
            {/* {JSON.stringify(cartItems)} */}


        </div>
    </div>

}; 
