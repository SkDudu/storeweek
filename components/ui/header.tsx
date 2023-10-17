import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet"

const Header = () => {
    return(
        <Card className="flex items-center justify-between p-[1.88rem]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"} variant={"outline"}>
                        <MenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader className="text-left text-lg font-semibold">
                        Menu
                    </SheetHeader>
                    <div className="mt-2 flex flex-col gap-2">
                        <Button variant={"default"} className="w-full justify-start gap-1 mb-4">
                            <LogInIcon size={18}/>
                            Fazer login
                        </Button>
                        <Button variant={"outline"} className="w-full justify-start gap-1">
                            <HomeIcon size={18}/>
                            Início
                        </Button>
                        <Button variant={"outline"} className="w-full justify-start gap-1">
                            <PercentIcon size={18}/>
                            Ofertas
                        </Button>
                        <Button variant={"outline"} className="w-full justify-start gap-1">
                            <ListOrderedIcon size={18}/>
                            Catálogo
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg">
                <span className="text-primary">Store</span>Week
            </h1>

            <Button size={"icon"} variant={"outline"}>
                <ShoppingCartIcon />
            </Button>
        </Card>
    )
}

export default Header