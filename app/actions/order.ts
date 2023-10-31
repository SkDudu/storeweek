import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "../providers/cart";
import { OrderProduct, User } from "@prisma/client";

export const createOrder = async (cartProducts: CartProduct[], userId: string) => {
    const order = await prismaClient.order.create({
        data: {
            userId,
            status:"WAITING_FOR_PAYMENT",
            orderProducts: {
                createMany: {
                    data: cartProducts.map((product) => ({
                        baseprice: product.baseprice,
                        discount: product.discount,
                        productId: product.id,
                        quantity: product.quantity
                    }))
                }
            }
        }
    })

    return order
}