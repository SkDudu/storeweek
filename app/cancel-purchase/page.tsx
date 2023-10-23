import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Cancel from "../../public/cancel.svg"

const CancelPurchase = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mx-5 gap-7">
            <Image 
                src={Cancel}
                alt="Compra feita com sucesso!"
                sizes="100vw"
                width={0}
                height={0}
                className="w-[60%]"
            />
            <h1 className="font-semibold">Não foi possível realizar a compra!</h1>
            <Link href={"/"} className="w-full">
                <Button className="w-full rounded-md h-[56px] mt-8 uppercase">Voltar para home</Button>
            </Link>
        </div>
    );
}
 
export default CancelPurchase;