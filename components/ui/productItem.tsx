import { ProductWithTotalPrice } from "@/app/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown01Icon, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className="flex bg-accent rounded-lg h-[170px] w-[156px] items-center justify-center">
                <Image 
                    src={product.imageUrl}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w[80%]"
                    style={{
                        objectFit: "contain"
                    }}
                    alt={product.name}
                />
                
                {product.discount > 0 && (
                    <Badge className="absolute left-2 top-2">
                        <ArrowDownIcon size={16}/>
                        {product.discount}%
                    </Badge>
                )}
            </div>

            <div>
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
                <div className="flex flex-row items-center gap-2">
                    {product.discount > 0 ? (
                        <>
                            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
                            <p className=" text-xs opacity-75 line-through">R$ {Number(product.baseprice).toFixed(2)}</p>
                        </>
                    ) : (
                        <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default ProductItem;