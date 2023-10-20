"use client"

import { ReactNode, createContext, useMemo, useState } from "react";
import { ProductWithTotalPrice } from "../helpers/product";

export interface CartProduct extends ProductWithTotalPrice {
    quantity: number
}

interface ICartContext {
    products: CartProduct[]
    cartBasePrice: number
    cartTotalPrice: number
    cartTotalDiscount: number
    total: number
    subTotal: number
    totalDiscount: number
    addProductsToCart: (product: CartProduct) => void
    decreaseProductQuantity: (productId: string) => void
    increaseProductQuantity: (productId: string) => void
    removeFromCart: (productId: string) => void
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    total: 0,
    subTotal: 0,
    totalDiscount: 0,
    addProductsToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeFromCart: () => {}
})

const CartProvider = ({children}: {children: ReactNode}) => {
    const [products, setProducts] = useState<CartProduct[]>([])

    const subTotal = useMemo(()=>{
        return products.reduce((acc, product) => {
            return acc + Number(product.baseprice) * product.quantity
        }, 0)
    }, [products])

    const total = useMemo(()=>{
        return products.reduce((acc, product) => {
            return acc + Number(product.totalPrice) * product.quantity
        }, 0)
    }, [products])

    const totalDiscount = useMemo(()=>{
        return subTotal - total
    }, [total, subTotal])

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

    const removeFromCart = (productId: string)=> {
        setProducts((prev) => prev.filter((cartProduct) => cartProduct.id !== productId))
    }

    return ( 
        <CartContext.Provider value={{
            products,
            addProductsToCart,
            decreaseProductQuantity,
            increaseProductQuantity,
            removeFromCart,
            total,
            subTotal,
            totalDiscount,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0
        }}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;