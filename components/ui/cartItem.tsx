import { CartContext, CartProduct } from "@/app/providers/cart";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, Trash } from "lucide-react";
import Image from "next/image";
import { Separator } from "./separator";
import { useContext, useState } from "react";

interface CartItemProps{
    product: CartProduct
}

const CartItem = ({product}: CartItemProps) => {
    const { decreaseProductQuantity, increaseProductQuantity, removeFromCart } = useContext(CartContext)

    const handleClickDecrease = () => {
        decreaseProductQuantity(product.id)
    }

    const handleClickIncrease = () => {
        increaseProductQuantity(product.id)
    }

    const handleRemoveItemFromCart = () => {
        removeFromCart(product.id)
    }

    return (
        <div>
            <div className="flex justify-between mt-5 items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-accent flex w-[40%] h-[95px] items-center justify-center rounded-lg">
                        <Image 
                            src={product.imageUrl}
                            alt={product.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-h[70%] max-w-[80%]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xs">{product.name}</p>

                        <div className="flex items-center gap-2">
                            <p className="font-bold text-sm">R$ {product.totalPrice.toFixed(2)}</p>
                            {product.discount > 0 && (
                                <p className="opacity-75 line-through text-xs">R$ {Number(product.baseprice).toFixed(2)}</p>
                            )}
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <Button variant={"outline"} size={"icon"} onClick={handleClickDecrease}>
                                <ArrowLeftIcon size={16}/>
                            </Button>
                            <div className="w-7">
                                <span className="flex justify-center">{Number(product.quantity)}</span>
                            </div>
                            <Button variant={"outline"} size={"icon"} onClick={handleClickIncrease}>
                                <ArrowRightIcon size={16}/>
                            </Button>
                        </div>
                    </div>
                </div>
                <Button variant={"outline"} onClick={handleRemoveItemFromCart}>
                    <Trash size={18}/>
                </Button>
            </div>
            <Separator className="mt-2"/>
        </div>
    );
}
 
export default CartItem;