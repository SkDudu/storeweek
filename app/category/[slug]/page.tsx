import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { computProductsTotalPrice } from "@/app/helpers/product";
import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/productItem";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({params}: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },

        include: {
            Product: true, 
        }
    })

    if(!category){
        return null
    }

    return (
        <div className="p-5">
            <Badge variant="outline" className="gap-1 border-primary text-base uppercase py-1 border-2">
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>

            <div className="grid grid-cols-3 gap-8 mt-4 mr-4">
                {category.Product.map(product => <ProductItem key={product.id} product={computProductsTotalPrice(product)}/>)}
            </div>
        </div>
    );
}
 
export default CategoryProducts;