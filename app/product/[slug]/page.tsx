import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfo from "./components/productInfo";
import { computProductsTotalPrice } from "@/app/helpers/product";
import ProductList from "@/components/ui/productList";

interface ProductDetailsProps{
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    Product: {
                        where: {
                            slug: {
                                not: slug
                            }
                        }
                    }
                }
            }
        }
    })

    if(!product) return null

    return (
        <div>
            <ProductImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductInfo product={computProductsTotalPrice(product)} />
            <div className="mx-5 my-5">
                <h1 className='font-bold uppercase mb-2'>Produtos recomendados</h1>
                <ProductList products={product.category.Product}/>
            </div>
        </div>
    );
}
 
export default ProductDetailsPage;