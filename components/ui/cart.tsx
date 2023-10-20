import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cart";
import CartItem from "./cartItem";
import { computProductsTotalPrice } from "@/app/helpers/product";
import { Separator } from "./separator";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";
import { createCheckout } from "@/app/actions/checkout";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const { products, total, totalDiscount, subTotal } = useContext(CartContext)

    const handleFinishPurchase = async () => {
        const checkout = await createCheckout(products)

        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
        )

        stripe?.redirectToCheckout({
            sessionId: checkout.id
        })
    }   

    return (
        <div className="p-5 h-full">
            <Badge className="gap-1 border-primary text-base uppercase py-1 border-2" variant={"outline"}>
                <ShoppingCart size={16}/>
                Carrinho
            </Badge>

            <Separator className="mt-4"/>

            <div className="flex flex-col h-full justify-between">
                <ScrollArea className="h-full">
                    <div className="mt-4">
                        {products.length > 0 ? (
                            products.map(product => <CartItem key={product.id} product={computProductsTotalPrice(product as any)}/>)
                        ):(
                            <Card className="items-center justify-center">
                                <CardContent className="items-center justify-center mt-4">
                                    Você não tem nenhum item na sacola. Vamos fazer uma compra?
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </ScrollArea>

                {products.length > 0 && (
                    <div className="flex flex-col gap-2 mb-8">
                        <div className="flex items-center justify-between mt-4 text-sm">
                            <p>SubTotal</p>
                            <p>R$ {subTotal.toFixed(2)}</p>
                        </div>
                        <Separator/>
                        <div className="flex items-center justify-between text-sm">
                            <p>Descontos</p>
                            <p>-R$ {totalDiscount.toFixed(2)}</p>
                        </div>
                        <Separator/>
                        <div className="flex items-center justify-between text-sm">
                            <p>Entrega</p>
                            <p>Grátis</p>
                        </div>
                        <Separator/>
                        <div className="flex items-center justify-between text-sm">
                            <p>Total</p>
                            <p>R$ {total.toFixed(2)}</p>
                        </div>

                        <Button className="w-full rounded-md h-[56px] mt-8 uppercase" onClick={handleFinishPurchase}>
                            Finalizar compra
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Cart;