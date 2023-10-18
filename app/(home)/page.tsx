import Image from 'next/image'

import { prismaClient } from '@/lib/prisma'

import CategoriesMenu from './components/categoriesMenu'
import ProductList from './components/productList'

import banner01 from "../../public/banner01.png"
import banner02 from "../../public/banner02.png"
import banner03 from "../../public/banner03.png"

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discount: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards'
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses'
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

      <div className='my-8'>
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

      <div className='mt-8 mb-8'>
        <h1 className='font-bold uppercase mb-2'>Teclados</h1>
        <ProductList products={keyboards}/>
      </div>

      <Image 
        src={banner03} 
        alt={'Até 55% de desconto esse mês.'}
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
      />

      <div className='mt-8 mb-8'>
          <h1 className='font-bold uppercase mb-2'>Mouses</h1>
          <ProductList products={mouses}/>
        </div>
      </div>
  )
}
