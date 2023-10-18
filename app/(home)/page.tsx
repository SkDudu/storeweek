"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import banner01 from "../../public/banner01.png"

export default function Home() {
  return (
    <div className='p-5'>
      <Image 
        src={banner01} 
        alt={'Até 55% de desconto esse mês.'}
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
      />
    </div>
  )
}
