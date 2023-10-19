"use client"
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps{
    name: string
    imageUrls: string[]
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0])

    const handleImageClick = (imageUrl: string) => {
        setCurrentImage(imageUrl)
    }

    return (
        <div className="flex flex-col">
            <div className="flex bg-accent w-full h-[380px] items-center justify-center">
                <Image src={currentImage} alt={name} width={0} height={0} 
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    sizes="100vw"
                    style={{
                        objectFit: "contain"
                    }}
                />
            </div>
            <div className="grid grid-cols-4 mt-8 px-5 cursor-pointer">
                {imageUrls.map(imageUrl => (
                    <div key={imageUrl} className={`bg-accent rounded-lg flex justify-center items-center w-[100px] h-[90px]
                        ${imageUrl === currentImage && 'border-2 border-primary border-solid'}
                    `}
                    onClick={()=>handleImageClick(imageUrl)}
                    >
                        <Image 
                            src={imageUrl}
                            alt={name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto max-w-[80%] h-auto max-h-[70%]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ProductImages;