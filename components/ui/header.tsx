"use client"

import {signIn, signOut, useSession} from "next-auth/react"
import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { Button } from "./button"
import { Card } from "./card"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./sheet"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Separator } from "./separator"
import Link from "next/link"
import Cart from "./cart"

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

                    <Separator className="my-2"/>

                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <h1>Bem vindo!</h1>
                            <SheetClose asChild>
                                <Link href="/">
                                    <Button variant={"outline"} className="w-full justify-start gap-1">
                                        <HomeIcon size={18}/>
                                        Início
                                    </Button>
                                </Link>
                            </SheetClose>
                            <Button variant={"outline"} className="w-full justify-start gap-1">
                                <PercentIcon size={18}/>
                                Ofertas
                            </Button>
                            <SheetClose asChild>
                                <Link href="/catalog">
                                    <Button variant={"outline"} className="w-full justify-start gap-1">
                                        <ListOrderedIcon size={18}/>
                                        Catálogo
                                    </Button>
                                </Link>
                            </SheetClose>
                            <Separator className="mb-2"/>
                        </div>

                        <div className="flex flex-col gap-2">
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
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            <Link href="/">
                <h1 className="font-semibold text-lg">
                    <span className="text-primary">Store</span>Week
                </h1>
            </Link>

            <Sheet>
                <SheetTrigger asChild>
                    <Button size={"icon"} variant={"outline"}>
                        <ShoppingCartIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side={"right"} className="w-[400px] lg:w-[700px] md:w=[500px]">
                    <Cart />
                </SheetContent>
            </Sheet>
        </Card>
    )
}

export default Header