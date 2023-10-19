import { ShoppingCart } from "lucide-react";
import { Badge } from "./badge";
import { useContext } from "react";
import { CartContext } from "@/app/providers/cart";

const Cart = () => {
    const { products } = useContext(CartContext)
    return (
        <div className="p-5">
            <Badge className="gap-1 border-primary text-base uppercase py-1 border-2" variant={"outline"}>
                <ShoppingCart size={16}/>
                Carrinho
            </Badge>

            {products.map(product => <h1 key={product.id}>{product.name}</h1>)}
        </div>
    );
}
 
export default Cart;