import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps{
    category: Category
}

const categoriesItem = ({category}: CategoryItemProps) => {
    return (
        <Link href={`category/${category.slug}`}>
            <Badge variant={"outline"}  className="gap-1 h-12 rounded-md w-full items-center justify-center">
                {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
                <span className="text-sm font-bold text-white">{category.name}</span>
            </Badge>
        </Link>
    );
}
 
export default categoriesItem;