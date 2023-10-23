import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import Sucess from "../../public/sucess.svg"
import { Card } from "@/components/ui/card";
import Link from "next/link";

const SucessPurchase = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-8 mx-5 gap-3">
            <Image 
                src={Sucess}
                alt="Compra feita com sucesso!"
                sizes="100vw"
                width={0}
                height={0}
                className="w-[70%]"
            />
            <h1 className="font-semibold">Compra realizada com sucesso!</h1>
            <Card className="w-full flex px-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="first">
                        <AccordionTrigger>
                            <h1 className="font-medium">Detalhes do pedido</h1>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                                    <Image />
                                    <p>Produto tal</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
            <Link href={"/"} className="w-full">
                <Button className="w-full rounded-md h-[56px] mt-8 uppercase">Voltar para home</Button>
            </Link>
        </div>
    );
}
 
export default SucessPurchase;