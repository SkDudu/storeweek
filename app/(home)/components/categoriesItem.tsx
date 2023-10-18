import { CATEGORY_ICON } from "@/app/constants/category-icon";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";

interface CategoryItemProps{
    category: Category
}

const categoriesItem = ({category}: CategoryItemProps) => {
    return (
        <Button variant={"outline"}  className="gap-1 h-10">
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="text-sm font-bold text-white">{category.name}</span>
        </Button>
    );
}
 
export default categoriesItem;