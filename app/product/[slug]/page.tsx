import { prismaClient } from "@/lib/prisma";

interface ProductDetailsProps{
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    return (
        <h1>{product?.name}</h1>
    );
}
 
export default ProductDetailsPage;