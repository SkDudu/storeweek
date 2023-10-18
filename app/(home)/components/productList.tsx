import Image from "next/image";

import { Product } from "@prisma/client";

import ProductItem from "@/components/ui/productItem";

interface ProductListProps {
    products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div>
            {products.map((product)=>(
                <ProductItem key={product.id} product={product}/>
            ))}
        </div>
    );
}
 
export default ProductList;