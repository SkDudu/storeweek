import { prismaClient } from "@/lib/prisma";

import CategoriesItem from "./categoriesItem";

const categoriesMenu = async() => {
    const categories = await prismaClient.category.findMany({})

    return (
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {categories.map(category => <CategoriesItem key={category.id} category={category}/>)}
        </div>
    );
}
 
export default categoriesMenu;