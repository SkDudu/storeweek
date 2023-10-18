import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/categoryItem";

const CatalogPage = async() => {
    const categories = await prismaClient.category.findMany({})
    return (
        <div className="p-5">
            <Badge variant={"outline"} className="gap-1 border-primary text-base uppercase py-1 border-2">
                <ShapesIcon size={16}/>
                Catálogo
            </Badge>
            <div className="grid grid-cols-2 gap-8 mt-4">
                {categories.map(category => <CategoryItem key={category.id} category={category}/>)}
            </div>
        </div>
    );
}
 
export default CatalogPage;