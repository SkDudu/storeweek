import Image from 'next/image'

import { prismaClient } from '@/lib/prisma'

import CategoriesMenu from './components/categoriesMenu'
import ProductList from './components/productList'

import banner01 from "../../public/banner01.png"
import banner02 from "../../public/banner02.png"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount: {
        gt: 0
      }
    }
  })

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

      <div className='mt-8'>
        <CategoriesMenu />
      </div>

      <div className='mt-8'>
        <h1 className='font-bold uppercase mb-2'>Ofertas</h1>
        <ProductList products={deals}/>
      </div>

      <Image 
        src={banner02} 
        alt={'Até 55% de desconto em mouses.'}
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
      />
    </div>
  )
}
