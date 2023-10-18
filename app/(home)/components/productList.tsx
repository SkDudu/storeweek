import Image from "next/image";

import { Product } from "@prisma/client";

import ProductItem from "@/components/ui/productItem";
import { computProductsTotalPrice } from "@/app/helpers/product";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className="flex flex-row gap-2">
            {products.map((product)=>(
                <ProductItem key={product.id} product={computProductsTotalPrice(product)}/>
            ))}
        </div>
    );
}
 
export default ProductList;