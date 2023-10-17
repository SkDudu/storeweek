"use client"

import {signIn, signOut, useSession} from "next-auth/react"
import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Separator } from "./separator"

const Header = () => {
    const {status, data} = useSession()
    const handleLogin = async () => {
        await signIn()
    }
    const handleLogout = async () => {
        await signOut()
    }
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

                    {status === "authenticated" && data?.user && (
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarFallback>
                                    {data.user.name?.[0].toUpperCase()}
                                </AvatarFallback>
                                {data.user.image && <AvatarImage src={data.user.image}/>}
                            </Avatar>

                            <p>{data.user.name}</p>
                        </div>
                    )}

                    <Separator className="my-2"/>

                    <div className="flex flex-col gap-2">
                        {status === "unauthenticated" && (
                            <Button variant={"default"} className="w-full justify-start gap-1 mb-4" onClick={handleLogin}>
                                <LogInIcon size={18}/>
                                Fazer login
                            </Button>
                        )}

                        {status === "authenticated" && (
                            <Button variant={"default"} className="w-full justify-start gap-1 mb-4 bg-red-600 hover:bg-red-700" onClick={handleLogout}>
                                <LogOutIcon size={18}/>
                                Logout
                            </Button>
                        )}

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