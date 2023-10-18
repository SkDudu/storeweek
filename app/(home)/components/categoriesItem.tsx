import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import {  HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps{
    category: Category
}

const categoriesItem = ({category}: CategoryItemProps) => {
    const categoryIcon = {
        mouses: <MouseIcon size={16}/>,
        keyboards: <KeyboardIcon size={16}/>,
        monitors: <MonitorIcon size={16}/>,
        headphones: <HeadphonesIcon size={16}/>,
        mousepads: <SquareIcon size={16}/>,
        speakers: <SpeakerIcon size={16}/>
    }

    return (
        <Button variant={"outline"}  className="gap-1 h-10">
            {categoryIcon[category.slug as keyof typeof categoryIcon]}
            <span className="text-sm font-bold text-white">{category.name}</span>
        </Button>
    );
}
 
export default categoriesItem;