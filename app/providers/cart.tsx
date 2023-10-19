"use client"

import { ReactNode, createContext, useState } from "react";
import { ProductWithTotalPrice } from "../helpers/product";

export interface CartProduct extends ProductWithTotalPrice {
    quantity: Number
}

interface ICartContext {
    products: CartProduct[]
    cartBasePrice: Number
    cartTotalPrice: Number
    cartTotalDiscount: Number
    addProductsToCart: (product: CartProduct) => void
    decreaseProductQuantity: (productId: string) => void
    increaseProductQuantity: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    addProductsToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {}
})

const CartProvider = ({children}: {childres: ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    const addProductsToCart = (product: CartProduct) => {
        const productIsAlredayOnCArt = products.some((cartProduct) => cartProduct.id === product.id)

        if(productIsAlredayOnCArt){
            setProducts((prev) => prev.map((cartProduct) => {
                if(cartProduct.id === product.id){
                    return{
                        ...cartProduct, quantity: cartProduct.quantity + product.quantity
                    }
                }
                return cartProduct
            }))
            return
        }
        setProducts((prev)=>[...prev, product])
    }

    const decreaseProductQuantity = (productId: string)=> {
        setProducts(prev => prev.map(cartProduct => {
            if(cartProduct.id === productId){
                return{
                    ...cartProduct, quantity: cartProduct.quantity - 1
                }
            }
            return cartProduct
        }).filter((cartProduct) => cartProduct.quantity > 0))
    }

    const increaseProductQuantity = (productId: string)=> {
        setProducts(prev => prev.map(cartProduct => {
            if(cartProduct.id === productId){
                return{
                    ...cartProduct, quantity: cartProduct.quantity + 1
                }
            }
            return cartProduct
        }))
    }

    return ( 
        <CartContext.Provider value={{
            products,
            addProductsToCart,
            decreaseProductQuantity,
            increaseProductQuantity,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;