import React, { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(null);


    return( <ShopContext.Provider value={[cartItems, setCartItems]}>
        {props.children}
        </ShopContext.Provider>
        
        );
};