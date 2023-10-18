import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product{
    totalPrice: number
}

export const computProductsTotalPrice = (product: Product): ProductWithTotalPrice => {
    if(product.discount === 0){
        return{...product, totalPrice: Number(product.baseprice)}
    }

    const totalPrice = Number(product.baseprice) * (product.discount) / 100

    return{
        ...product, totalPrice
    }
}