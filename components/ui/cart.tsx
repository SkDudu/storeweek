import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cart";
import CartItem from "./cartItem";
import { computProductsTotalPrice } from "@/app/helpers/product";
import { Separator } from "./separator";

const Cart = () => {
    const { products } = useContext(CartContext)
    return (
        <div className="p-5">
            <Badge className="gap-1 border-primary text-base uppercase py-1 border-2" variant={"outline"}>
                <ShoppingCart size={16}/>
                Carrinho
            </Badge>

            <Separator className="mt-4"/>

            {products.map(product => <CartItem key={product.id} product={computProductsTotalPrice(product as any)}/>)}
        </div>
    );
}
 
export default Cart;