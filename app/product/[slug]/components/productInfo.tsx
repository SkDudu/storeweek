"use client"

import { ProductWithTotalPrice } from "@/app/helpers/product";
import { CartContext } from "@/app/providers/cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
    product: ProductWithTotalPrice
}

const ProductInfo = ({product}: ProductInfoProps) => {
    const { toast } = useToast()
    const [quantity, setQuantity] = useState(1)

    const {addProductsToCart} = useContext(CartContext)


    const handleDecreaseQuantity = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev-1))
    }

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev+1)
    }

    const handleAddToCart = () => {
       addProductsToCart({...product, quantity})
       toast({
            title: "Adicionado ao carrinho!",
            description: "Clique no ícone de compras para visualizar.",
            action: <ToastAction altText="Ok">Ok</ToastAction>,
        })
    }

    return (
        <div className="flex flex-col px-5 py-5">
            <h2 className="text-lg">{product.name}</h2>
            <p className="text-xs font-thin text-purple-300">Disponível em estoque</p>

            <div className="flex items-center mt-2 gap-2">
                <h1 className="text-xl font-bold">R$ {product.totalPrice.toFixed(2)}</h1>
                <Badge className="left-2 top-2">
                    <ArrowDownIcon size={16}/>
                    {product.discount}%
                </Badge>
            </div>

            {product.discount > 0 && (
                <p className="text-sm line-through opacity-75">R$ {Number(product.baseprice).toFixed(2)}</p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button variant={"outline"} size={"icon"} onClick={handleDecreaseQuantity}>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <div className="w-7">
                    <span className="flex justify-center">{quantity}</span>
                </div>
                <Button variant={"outline"} size={"icon"} onClick={handleIncreaseQuantity}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>

            <div className="flex flex-col mt-8 gap-2">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-60 font-normal text-justify">{product.description}</p>

                <Button className="w-full rounded-md h-[56px] mt-8 uppercase" onClick={handleAddToCart}>
                    Adicionar ao carrinho
                </Button>

                <div className="bg-accent flex rounded-md items-center justify-between px-5 py-2 mt-5">
                    <div className="flex items-center gap-5">
                        <TruckIcon />
                        <div className="flex flex-col">
                            <p>Entrega via <span className="font-bold">FSPacket</span></p>
                            <p className="text-sm font-thin text-purple-300">Entrega para todo o Brasil</p>
                        </div>
                    </div>

                    <div className="font-bold text-xs">
                        Frete Gratis
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductInfo;