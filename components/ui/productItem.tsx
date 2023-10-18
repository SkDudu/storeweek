import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product
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
            </div>
            <div>
                <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
            </div>
        </div>
    );
}
 
export default ProductItem;