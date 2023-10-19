"use client"

import { Product } from "@prisma/client";
import { ReactNode, createContext } from "react";

interface CartProduct extends Product {
    quantity: Number
}

interface ICartContext {
    products: CartProduct[]
    cartBasePrice: Number
    cartTotalPrice: Number
    cartTotalDiscount: Number
}

const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0
})

const CartProvider = ({children}: {childres: ReactNode}) => {
    return ( 
        <CartContext.Provider value={{
            products: [],
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;